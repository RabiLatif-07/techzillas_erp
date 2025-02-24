import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { StoreVisitsCharts } from './DashboardEcommerceCharts';

const StoreVisits = () => {
    return (
        <React.Fragment>
            <Col >
                <Card className="card card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Marketing</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown" >
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted">This Week<i className="ri-arrow-down-s-line"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Download Report</DropdownItem>
                                    <DropdownItem>Export</DropdownItem>
                                    <DropdownItem>Import</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <div className="card-body">
                        {/* <div dir="ltr"> */}
                            <StoreVisitsCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning"]'/>
                        {/* </div> */}
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default StoreVisits;