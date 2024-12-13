import React from "react";
import { useLocation } from 'react-router-dom'; 
import FeatherIcon from "feather-icons-react";
import { Col, Row } from "reactstrap";
import { capitalize } from "lodash";

const BreadCrumb = ({ title, icon }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-start">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item pe-2">
                  <FeatherIcon icon={icon} className="breadcrumb-icon"/>
                </li>
                <li className="pe-2">/</li>
                <li className="breadcrumb-item active">{title? title : ""} {title ? "/" : ""} {capitalize(pathnames)}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
