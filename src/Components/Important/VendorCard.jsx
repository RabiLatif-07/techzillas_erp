import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const VendorCard = ({iconClass}) => {



  return (
    <>  
    <Col lg={6} className="p-0">
      <Card className="card-animate">
        <CardBody>
          <div>
            <div className="icon-header">
              <span className="icon-3">
                <i className={iconClass}></i>
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
            <div className="sales-card">
              <div>
                <p className="text-muted mb-2">All Vendors</p>
                <h4 className="m-0">
                  1,250
                  <span className="text">+15.80%</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">Active</p>
                <h4 className="m-0">
                  1,180
                  <span className="text">+85%</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">In-Active</p>
                <h4 className="m-0">
                  70
                  <span className="text">-10%</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">Returns</p>
                <h4 className="m-0">
                  0
                  <span className="text">+0.00%</span>
                </h4>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
    <Col lg={6} className="p-0" >
    <Card className="card-animate">
        <CardBody>
          <div>
            <div className="icon-header">
              <span className="icon-3">
                <i className={iconClass}></i>
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
            <div className="sales-card">
              <div>
                <p className="text-muted mb-2">New Vendors</p>
                <h4 className="m-0">
                  30
                  <span className="text">-20%</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">Purchasing</p>
                <h4 className="m-0">
                  657
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">Abandoned Carts</p>
                <h4 className="m-0">
                  5
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">Returns</p>
                <h4 className="m-0">
                  0
                  <span className="text">+0.00%</span>
                </h4>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
   
    </>
  );
};

export default VendorCard;
