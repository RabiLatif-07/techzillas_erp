import React from "react";
import {
  Card,
  Row,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const WidgetDashboard = () => {
  return (
    <Row className="marketing-widgets">
      {/* Sales and Volume Card */}
      <Col xl={12}>
        <Card className="folder-card" style={{ minHeight: "175px" }}>
          <CardBody>
            <div className="icon-header">
              <span className="folder-icon">
                <i className=" ri-folder-reduce-line"></i>
              </span>
            </div>
            <div className="marketing-cards">
              <div>
                <p className="product-heading mb-2">All Products</p>
                <h4 className="product-value m-0">45</h4>
              </div>
              <div>
                <p className="product-heading mb-2">Active</p>
                <h4 className="product-value m-0">
                  32 <span className="text-value">+24%</span>
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Vendors Card */}
      <Col xl={12}>
        <Card className="card-animate" style={{ minHeight: "175px" }}>
          <CardBody>
            <div>
              <div className="shopping-card">
                <span className="icon-2">
                  <i className="ri-shopping-cart-line"></i>
                </span>
                <div className="flex-shrink-0">
                  <UncontrolledDropdown className="card-header-dropdown">
                    <DropdownToggle
                      tag="a"
                      className="text-reset dropdown-btn"
                      role="button"
                    >
                      <span className="week text-muted">
                        This Week
                        <i className="align-items-center ri-arrow-down-s-line"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem>Year</DropdownItem>
                      <DropdownItem>Month</DropdownItem>
                      <DropdownItem>Week</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="marketing-cards">
                <div>
                  <p className="text-cart text-muted mb-2">Abandoned Cart</p>
                  <h4 className="m-0">
                    20%<span className="text">+0.00%</span>
                  </h4>
                </div>
                <div>
                  <p className="text-muted mb-2">Customers</p>
                  <h4 className="m-0">30</h4>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default WidgetDashboard;
