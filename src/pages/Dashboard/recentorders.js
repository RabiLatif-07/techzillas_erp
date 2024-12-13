import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const getStatusClasses = (status) => {
  switch (status) {
    case "Delivered":
      return "status-btn-success";
    case "Active":
      return "status-btn-active";
    case "Cancelled":
      return "status-btn-cancelled";
    default:
      return "status-btn-success";
  }
};

const RecentOrders = ({ title, column, recentOrders }) => {
  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
            <div className="flex-shrink-0">
              <button type="button" className="btn view-all">
                View All
              </button>
            </div>
          </CardHeader>

          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted">
                  <tr>
                    {column?.map((item) => {
                      return <th scope="col">{item.toUpperCase()}</th>;
                    })}
                  </tr>
                </thead>
                {recentOrders?.length === 0 ? (
                  <span>No Data Found</span>
                ) : (
                  <tbody>
                    {(recentOrders || []).map((item, key) => (
                      <tr key={key}>
                        <td>
                          <Link
                            to="/apps-ecommerce-order-details"
                            className="order-id "
                          >
                            {item.orderId}
                          </Link>
                        </td>
                        <td>
                          <span className={getStatusClasses(item.status)}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.vendor}</td>
                        <td>
                          <span>{item.departure}</span>
                        </td>
                        <td>{item.weight}</td>
                        <td>
                          <span>{item.arrival}</span>
                        </td>
                        <td>
                          <span>{item.arrivaldate}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RecentOrders;
