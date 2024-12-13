import React from "react";
import { ReactComponent as MyIcon } from "../../assets/images/fast-delivery.svg";
import { Col, Row, Card } from "reactstrap";
import { ReactComponent as Circle } from "../../assets/images/svg/circle.svg";
import { ReactComponent as Ellipse } from "../../assets/images/svg/ellipse.svg";

const ShipCard = ({ item, index }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "Available":
        return "status-btn-success";
      case "Unloading":
        return "status-btn-unloading";
      case "Loading","Departed" ,"Arriving":
        return "status-btn-loading";
      default:
        return "status-btn-success";
    }
  };
  return (
    <div className="mt-3 border rounded-3" key={index}>
      <div className="ship-wrapper">
        <div className="ship-header p-3 d-flex justify-content-between  border-bottom">
          <div className="d-flex gap-2">
            <MyIcon />
            <span>{item.shipId}</span>
          </div>
          <div>
            <span className={getStatusClasses(item?.status.status_code)}>{item?.status.status_code}</span>
          </div>
        </div>
        <div className="ship-body p-3">
        <div className="timeline-continue">
          <Row className="timeline-right">
            <Col xs={12} className="shipdata d-flex justify-content-between">
              <p className="text-muted border-lines">
                <Circle  className="circle-svg"/>
                Arriving
              </p>
              <span >{item.status.ship_date_time}</span>
            </Col>
            <Col xs={12} className="shipdata d-flex justify-content-between">
              <p className="text-muted border-lines">
                <Ellipse  className="ellipse-svg"/>
                Unloading
              </p>
              <span>{item.status.ship_date_time}</span>
            </Col>
            <Col xs={12} className="shipdata d-flex justify-content-between">
              <p className="text-muted border-lines">
                <Ellipse className="ellipse-svg"/>
                Loading
              </p>
              <span>{item.status.ship_date_time}</span>
            </Col>
            <Col xs={12} className="shipdata d-flex justify-content-between">
              <p className="text-muted">
                <Ellipse  className="ellipse-svg"/>
                  Preparing
              </p>
              <span>{item.status.ship_date_time}</span>
            </Col>
          </Row>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
