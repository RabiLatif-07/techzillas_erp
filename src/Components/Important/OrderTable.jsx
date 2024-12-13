import React from "react";
import FeatherIcon from "feather-icons-react";
import "./widgets.css";
import { Progress } from "reactstrap";

const OrderTable = ({ column, recentOrders, inloading, availCargo }) => {
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

  return (
    <div className="table-responsive mt-4 mt-xl-0">
      <table className="table table-centered align-middle table-nowrap mb-0">
        {column ? (
          <thead className="text-muted">
            <tr>
              {column?.map((item, index) => (
                <th key={index} scope="col">
                  {item.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
        ) : (
          ""
        )}

        {recentOrders?.length === 0 ? (
          <span>No Data Found</span>
        ) : (
          <tbody>
            {recentOrders?.map((item, key) => (
              <tr key={key}>
                {inloading || availCargo ? (
                  <td>{item.shipmentId}</td>
                ) : (
                  <td>{item.orderId}</td>
                )}
                {inloading ? (
                  <>
                    <td>
                      <span className="pe-2">{item.departure}</span>
                      <span>-</span>
                      <span className="circle"></span>
                      <span>---</span>
                      <span className="circleActive"></span>
                      <span>-</span>
                      <span style={{ marginLeft: "6px" }}>{item.arrival}</span>
                    </td>
                  </>
                ) : (
                  ""
                )}
                {availCargo ? (
                  ""
                ) : (
                  <td>
                    <span className={getStatusClasses(item.status)}>
                      {item.status}
                    </span>
                  </td>
                )}
                {availCargo ? (
                  <td className="d-flex gap-2 justify-content-between" style={{width: "130%", marginTop: "15.5px"}}>
                    <Progress value={75} style={{width: "100%"}}/>
                    <span className="progress-value d-block">40%</span>
                  </td>
                ) : (
                  ""
                )}

                {inloading || availCargo ? "" : <td>{item.vendor}</td>}
                {inloading || availCargo ? (
                  ""
                ) : (
                  <td>
                    <span>{item.departure}</span>
                  </td>
                )}
                {availCargo ? (
                  <td style={{ textAlign: "center" }}>
                    <span className="me-3">{item.departure}</span>
                    <span className="me-3">------</span>
                    <span>{item.arrival}</span>
                  </td>
                ) : (
                  ""
                )}
                {inloading || availCargo ? "" : <td>{item.weight}</td>}
                {inloading || availCargo ? (
                  ""
                ) : (
                  <td>
                    <span>{item.arrival}</span>
                  </td>
                )}
                {availCargo ? (
                  ""
                ) : (
                  <td>
                    <span>{item.arrivaldate}</span>
                  </td>
                )}

                {inloading ? (
                  <td style={{ textAlign: "right" }}>
                    <FeatherIcon
                      icon="download"
                      size={30}
                      style={{
                        border: "1px solid whitesmoke",
                        padding: "3px",
                        margin: "0px 5px",
                      }}
                    />
                    <FeatherIcon
                      icon="printer"
                      size={30}
                      style={{ border: "1px solid whitesmoke", padding: "3px" }}
                    />
                  </td>
                ) : (
                  ""
                )}
                {availCargo ? (
                  <td style={{textAlign: "right", cursor: "pointer"}}>
                    <FeatherIcon
                      icon="log-out"
                      size={30}
                      style={{ border: "1px solid whitesmoke", padding: "3px" }}
                    />
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrderTable;
