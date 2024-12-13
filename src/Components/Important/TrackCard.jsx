import React, { useState } from "react";
import { ReactComponent as MyIcon } from "../../assets/images/fast-delivery.svg";
import { Col, Row } from "reactstrap";
import { ReactComponent as Circle } from "../../assets/images/svg/circle.svg";
import { ReactComponent as Ellipse } from "../../assets/images/svg/ellipse.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/svg/PhoneOutlined.svg";

const TrackCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Track the expanded state of the card

  const getStatusClasses = (status) => {
    switch (status) {
      case "Available":
        return "status-btn-success";
      case "Unloading":
        return "status-btn-unloading";
      case ("Loading", "Departed", "Arriving"):
        return "status-btn-loading";
      default:
        return "status-btn-success";
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-3 border rounded-3" key={index}>
      <div className="ship-wrapper">
        <div className="ship-header p-3 d-flex border-bottom">
          <div className="d-flex gap-2 " style={{ marginRight: "10px" }}>
            <MyIcon />
            <span>{item.shipId}</span>
          </div>
          <div>
            <span className={getStatusClasses(item?.status.status_code)}>
              {item?.status.status_code}
            </span>
          </div>
        </div>

        <div className="m-3">
          <p className="text-muted m-0 mb-2">{item.shipNo}</p>
          <div className="d-flex justify-content-between">
            <p className="text-muted m-0 ">Max Ld. {item.maxLoad}</p>
            <a
              style={{ color: "#1677FF" }}
              href="#"
              className="view-more"
              onClick={handleToggle}
            >
              {isExpanded ? "View Less" : "View More"}
            </a>
          </div>
        </div>

        {isExpanded && (
          <div className="ship-body p-3 border-top">
            <div className="timeline-continue">
              <Row className="timeline-right">
                <Col
                  xs={12}
                  className="shipdata d-flex justify-content-between"
                >
                  <p className="text-muted border-lines">
                    <Circle className="circle-svg" />
                    Departure
                  </p>
                  <span>{item.route.departure}</span>
                </Col>
                <Col
                  xs={12}
                  className="shipdata d-flex justify-content-between"
                >
                  <p className="text-muted border-lines">
                    <Ellipse className="ellipse-svg" />
                    Stop 01
                  </p>
                  <span>{item.route.stops[0]}</span>
                </Col>
                <Col
                  xs={12}
                  className="shipdata d-flex justify-content-between"
                >
                  <p className="text-muted border-lines">
                    <Ellipse className="ellipse-svg" />
                    Stop 02
                  </p>
                  <span>{item.route.stops[1]}</span>
                </Col>
                <Col
                  xs={12}
                  className="shipdata d-flex justify-content-between"
                >
                  <p className="text-muted">
                    <Ellipse className="ellipse-svg" />
                    Arrival
                  </p>
                  <span>{item.route.arrival}</span>
                </Col>
                <Col
                  xs={12}
                  className="shipperdata d-flex justify-content-between"
                  style={{ backgroundColor: "#0000000F" }}
                >
                  <div className="d-flex">
                    <img
                      src={item.shipper.pic}
                      style={{ marginRight: "8px" }}
                    />
                    <p className="text-muted m-0 ">
                      Shipperr’s ID
                      <span style={{ color: "#000000E0" }}>
                        #{item.shipper.id}
                      </span>
                    </p>
                  </div>
                  <PhoneIcon />
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackCard;
