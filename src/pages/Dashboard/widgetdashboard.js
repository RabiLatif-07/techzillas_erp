import React from "react";
import {
  Card, CardBody,
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

const WidgetDashboard = () => {
  return (
    <Row >
      {/* Sales and Volume Card */}
      <Col md={3} sm={12} style={{paddingLeft: "0px", paddingRight: "25px"}}>
         <Card className="card-animate ">
          <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-1">
                  <FeatherIcon icon="pie-chart" />
                </span>
                <div className="flex-shrink-0">
                    <UncontrolledDropdown className="card-header-dropdown" >
                        <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                            <span className="week text-muted">This Week<i className="align-items-center ri-arrow-down-s-line"></i></span>
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
                <p className='text-muted mb-2'>Sales</p>
                <h4 className='m-0'>$4,000.00</h4>
              </div>
              <div>
              <p className='text-muted mb-2'>Volume</p>
                <h4 className='m-0'>450 <span className="text">+20.00%</span></h4>
              </div>
            </div>
            </div>
          </CardBody>  
        </Card>
      </Col>

      {/* Vendors Card */}
      <Col md={3} sm={12} style={{paddingLeft: "0px", paddingRight: "25px"}}>
      <Card className="card-animate ">
      <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-2">
                  <i className="ri-group-line"></i>
                </span>
                <div className="flex-shrink-0">
                    <UncontrolledDropdown className="card-header-dropdown" >
                        <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                            <span className="week text-muted">This Week<i className="align-items-center ri-arrow-down-s-line"></i></span>
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
                <p className='text-muted mb-2'>Total Vendors</p>
                <h4 className='m-0'>1,250<span className="text">+15.80%</span></h4>
              </div>
              <div>
              <p className='text-muted mb-2'>Active Vendors</p>
              <h4 className='m-0'>1,180 <span className="text">85%</span></h4>              
              </div>
            </div>
             
            </div>
          </CardBody>  
        </Card>
      </Col>

      {/* Orders Card */}
      <Col md={6} sm={12} style={{paddingLeft: "0px"}}>
        <Card className="card-animate">
          <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-3">
                  <i className="ri-shopping-bag-line"></i>
                </span>
                <div className="flex-shrink-0">
                    <UncontrolledDropdown className="card-header-dropdown" >
                        <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                            <span className="week text-muted">This Week<i className="align-items-center ri-arrow-down-s-line"></i></span>
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
                <p className='text-muted mb-2'>All Orders</p>
                <h4 className='m-0'>450</h4>
              </div>
              <div>
              <p className='text-muted mb-2'>Pending</p>
                <h4 className='m-0'>5</h4>
              </div>
              <div>
              <p className='text-muted mb-2'>Completed</p>
                <h4 className='m-0'>445</h4>
              </div>
              <div>
              <p className='text-muted mb-2'>Returns</p>
                <h4 className='m-0'>0<span className="text">+0.00%</span></h4>
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
