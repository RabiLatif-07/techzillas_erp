import React, { useState, useEffect } from "react";
import Icon from "../../assets/images/svg/weight.svg";
import Icon2 from "../../assets/images/svg/route.svg";
import Icon3 from "../../assets/images/svg/calender.svg";
import "./widgets.css";
import { Card, Col, Row } from "reactstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const RecommendationOrders = ({ title, shipOrders }) => {
  const [activeIcon, setActiveIcon] = useState("icon1");
  const [orders, setOrders] = useState(shipOrders);

  useEffect(() => {
    setOrders(shipOrders);
  }, [shipOrders]);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) return;

    const updatedOrders = Array.from(orders);
    const [movedItem] = updatedOrders.splice(source.index, 1);
    updatedOrders.splice(destination.index, 0, movedItem);
    setOrders(updatedOrders);
  };

  return (
    <>
      <Row>
        <div className="recommendation-icons text-align-center">
          <span className="title">{title}</span>
          <div className="icons text-align-center">
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive me-2 ${activeIcon === "icon1" ? "icon-active" : ""}`}
              src={Icon}
              alt="Icon 1"
              onClick={() => handleIconClick("icon1")}
            />
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive me-2 ${activeIcon === "icon2" ? "icon-active" : ""}`}
              src={Icon2}
              alt="Icon 2"
              onClick={() => handleIconClick("icon2")}
            />
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive ${activeIcon === "icon3" ? "icon-active" : ""}`}
              src={Icon3}
              alt="Icon 3"
              onClick={() => handleIconClick("icon3")}
            />
          </div>
        </div>
      </Row>
      <Row className="droppable-orders m-1">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable-orders">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%" }}
              >
                {orders.length > 0
                  ? orders.map((item, index) => (
                      <Draggable
                        key={item.orderID}
                        draggableId={item.orderID.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              margin: "0px",
                            }}
                            className="custom-order"
                          >
                            <Card className="border-2 m-0 d-flex flex-row align-items-center">
                              <div className="drag-handle">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                              <div className="orders-div">
                                <p className="d-flex recommendationorder-id">
                                  ID: {item.orderID}
                                </p>
                                <div className="info">
                                  <div className="info-item mb-1">
                                    <img src={Icon} alt="Weight Icon"></img>
                                    <span>{item.weight}kg</span>
                                  </div>
                                  <div className="d-flex info-item">
                                    <img src={Icon2} alt="Route Icon"></img>
                                    <span>{item.route}</span>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))
                  : "No Data Found"}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Row>
    </>
  );
};

export default RecommendationOrders;
