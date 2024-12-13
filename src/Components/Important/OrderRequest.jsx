import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "reactstrap";
import Icon from "../../assets/images/order.svg";
import Icon2 from "../../assets/images/svg/Vector.svg";
import "./widgets.css";
import OffCanvas from "../Important/OffCanvas";
import { Spinner, Alert } from "reactstrap";

const OrderRequest = ({ title, recentOrderRequest, search }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let filteredOrders = recentOrderRequest;
    if (search.length > 7) {
      filteredOrders = filteredOrders.filter((item) =>
        item.orderID.toLowerCase().includes(search.toLowerCase())
      );
   
    }
    if (filterByStatus) {
      setLoading(true);
      filteredOrders = filteredOrders.filter(
        (item) => item.status === "newOrder"
      );
    } else {
      filteredOrders = filteredOrders.filter(
        (item) => item.status !== "newOrder"
      );
    }
    setTimeout(() => {
      setFilterData(filteredOrders);
      setLoading(false);
    }, 500);
  }, [recentOrderRequest, search, filterByStatus]);

  const toggleOffcanvas = (orderId) => {
    setSelectedOrderId(orderId === selectedOrderId ? null : orderId);
  };
  const handleIcon1Click = () => {
    setFilterByStatus(true);
  };
  const handleIcon2Click = () => {
    setFilterByStatus(false);
  };

  return (
    <div className="request-order">
      <div className="icon-header">
        <span className="title">{title}</span>
        <div className="icons">
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive me-2 ${
              filterByStatus ? "icon-active" : ""
            }`}
            src={Icon}
            alt="Icon"
            onClick={handleIcon1Click}
          />
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive ${!filterByStatus ? "icon-active" : ""}`}
            src={Icon2}
            alt="Icon"
            onClick={handleIcon2Click}
          />
        </div>
      </div>
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner color="dander" type="grow">
            Loading...
          </Spinner>
        </div>
      )}
      {!loading && filterData.length > 0
        ? filterData.map((item, key) => (
            <Card
              key={key}
              className="order-card"
              style={{
                backgroundColor: !filterByStatus
                  ? "#f7f7f7"
                  : "rgba(255, 241, 240, 1)",
              }}
            >
              <div className="order-header">
                <div>
                  <CompanyLogo className="order-icon" />
                  <span>{item.orderID}</span>
                </div>
                <span className="order-date">
                  {item.date} {item.time}
                </span>
              </div>
              <span className="hr-border"></span>
              <div className="row">
                <div className="col-lg-12">
                  <div className="timeline-2">
                    <div className="timeline-continue">
                      <Row className="timeline-right">
                        <Col xs={12}>
                          <p className="timeline-date text-muted">
                            Pickup Location
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className="without-circle">
                            123 Main St, Anytown CA 12345
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className="timeline-date text-muted">
                            Destination
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className="data">
                            456 Elm St, Smalltown, NY 54321
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              <span className="hr-border"></span>

              <div className="order-footer">
                <div className="company-info">
                  <img
                    src={item.company.img}
                    alt={`${item.company.name} Logo`}
                  />
                  {item.company.name}
                </div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    toggleOffcanvas(item.orderID);
                  }}
                  href="#"
                  className="view-details"
                >
                  View Details
                </a>
              </div>
            </Card>
          ))
        : !loading && (
            <Alert color="danger">
              <strong>No Order Found</strong>
            </Alert>
          )}

      {selectedOrderId && (
        <OffCanvas
          title="Order Request Details"
          isOpen={!!selectedOrderId}
          toggle={() => setSelectedOrderId(null)}
          orderDetails={recentOrderRequest.find(
            (item) => item.orderID === selectedOrderId
          )}
        />
      )}
    </div>
  );
};

export default OrderRequest;
