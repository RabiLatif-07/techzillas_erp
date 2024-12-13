import React, { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import Icon3 from "../../assets/images/svg/face.svg";
import Icon4 from "../../assets/images/svg/Frame.svg";
import CompanyName from "../../assets/images/svg/companyname.svg";
import CompanyLogo from "../../assets/images/svg/CodeSandboxOutlined.svg";

const OffCanvas = ({ isOpen, toggle, orderDetails, title }) => {
  const [filterByStatus, setFilterByStatus] = useState(true);
  // useEffect(() => {
  //   if (isOpen) {
  //     console.log("Order Details:", orderDetails);
  //     console.log("Order ID:", orderDetails?.orderID);
  //   }
  // }, [isOpen, orderDetails]);

  const handleIcon1Click = () => {
    setFilterByStatus(true);
  };
  const handleIcon2Click = () => {
    setFilterByStatus(false);
  };

  return (
    <Offcanvas
      isOpen={isOpen}
      direction="end"
      toggle={toggle}
      id="offcanvasRight"
      className="border-bottom"
    >
      <OffcanvasHeader toggle={toggle} id="offcanvasRightLabel">
        {title}
      </OffcanvasHeader>
      <div className="d-flex offCanvas-top border-top">
        {filterByStatus ? (
          <h6 className="customer-text">Customer Details</h6>
        ) : (
          <h6 className="customer-text">Order Details</h6>
        )}

        <div className="icons">
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive me-2 ${
              filterByStatus ? "icon-active" : ""
            }`}
            src={Icon3}
            alt="Customer Details"
            onClick={handleIcon1Click}
          />
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive ${!filterByStatus ? "icon-active" : ""}`}
            src={Icon4}
            alt="Order Details"
            onClick={handleIcon2Click}
          />
        </div>
      </div>

      <OffcanvasBody className="p-0 overflow-hidden">
        <SimpleBar style={{ height: "100vh" }}>
          <div className="acitivity-timeline p-3">
            <div className="company-info">
              <div className="d-flex">
                <img src={CompanyName} alt="Icon" />
                <div className="d-flex  company-name">
                  {orderDetails?.company?.name}
                  <div className="action-section">
                    <button className="button accept">Accept</button>
                    <button className="button reject">Reject</button>
                  </div>
                </div>
              </div>
              <div className="meta-tags mt-3 mb-5">
                <span className="manufacturing-text">
                  Manufacturing &bull; Ludhiana, Punjab
                </span>
                <div>
                  <span className="text-muted date">{orderDetails?.date}</span>
                  <span className="text-muted time">{orderDetails?.time}</span>
                </div>
              </div>
            </div>
            <div className="about-section">
              {filterByStatus ? (
                <>
                  <h4 className="mb-2">About</h4>
                  <p className="menufacturing-text mb-3">
                    {orderDetails?.about}
                  </p>
                </>
              ) : (
                <>
                  <h6 className="title-text mb-1">Order ID</h6>
                  <p className="menufacturing-text mb-3">
                    <img src={CompanyLogo} alt="Icon" />
                    {orderDetails?.orderID}
                  </p>
                </>
              )}
              {filterByStatus ? (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Website</h6>
                  <Link className="value" to={orderDetails?.website || "#"}>
                    {orderDetails?.website}
                  </Link>
                </div>
              ) : (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Order Placed On</h6>
                  <div className="d-flex">
                    <span className="text-muted date">
                      {orderDetails?.date}
                    </span>
                    <span className="text-muted time">
                      {orderDetails?.time}
                    </span>
                  </div>
                </div>
              )}

              {filterByStatus ? (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1 ">Phone</h6>
                  <span className="value">{orderDetails?.phone}</span>
                </div>
              ) : (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1 ">Description</h6>
                  <span className="text-muted">
                    {orderDetails?.description}
                  </span>
                </div>
              )}
              {filterByStatus ? (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Industry</h6>
                  <span className="detail-text">{orderDetails?.industry}</span>
                </div>
              ) : (
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Pickup Address</h6>
                  <span className="detail-text">
                    {orderDetails?.pickupLocation.address}
                  </span>
                </div>
              )}
              {
                filterByStatus ? (
                  <div className="d-grid mb-4">
                  <h6 className="title-text mb-2">Locations (1)</h6>
                  <h6 className="mb-3">Headquarters</h6>
                  <p className="detail-text">{orderDetails?.location}</p>
                </div>
                ): (<><div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Delivery Address</h6>
                  <span className="detail-text">
                    {orderDetails?.destination.address}
                  </span>
                </div>
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Order Item Summary</h6>
                  <span className="detail-text">
                    {orderDetails?.ordersummary}
                  </span>
                </div>
                <div className="d-grid mb-4">
                  <h6 className="title-text mb-1">Route</h6>
                  <span className="detail-text">
                    {orderDetails?.route}
                  </span>
                </div>
                </>
                )
              }
             
            </div>
            <div className="mb-6">
              <h5 className="title-text mt-3 mb-2">Note:</h5>
              <p className="detail-text ">{orderDetails?.note}</p>
            </div>
          </div>
        </SimpleBar>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffCanvas;
