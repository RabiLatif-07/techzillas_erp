import React, { useState, useCallback } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const DataTable = ({ title, customerData, column }) => {
  const [copyStatus, setCopyStatus] = useState("");
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus(`Copied: ${text}`);
        setTimeout(() => setCopyStatus(""), 3000);
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
        setCopyStatus("Failed to copy!");
        setTimeout(() => setCopyStatus(""), 3000);
      });
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "status-btn";
      case "Cancelled":
        return "status-btn-cancelled";
      default:
        return "status-btn";
    }
  };
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".customerCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
  }, []);

  return (
    <>
      <CardBody>
        <div className="table-responsive table-card">
          <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
            <thead className="text-muted border-top">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="checkBoxAll"
                    className="form-check-input"
                    onClick={() => checkedAll()}
                  />
                </th>
                {column?.map((item, index) => (
                  <th key={index} className="table-heading" scope="col">
                    {item.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            {customerData?.length === 0 ? (
              <span>No Data Found</span>
            ) : (
              <tbody>
                {customerData?.map((item, key) => (
                  <tr key={key}>
                    <td>
                      <input
                        type="checkbox"
                        class="customerCheckBox form-check-input"
                        value=""
                      />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        {item.orders && item.orders.length > 0 ? (
                          item.orders.map((order, index) => (
                            <div key={index} className="data-table">
                              {order.orderDate}
                            </div>
                          ))
                        ) : (
                          <div className="data-table">{item.vendorName}</div>
                        )}
                      </div>
                    </td>

                    <td>
                      <span className="data-table">{item.email}</span>
                      <i
                        className="data-table ri-file-copy-line"
                        style={{ paddingLeft: "10px" }}
                        onClick={() => copyToClipboard("Some text to copy")}
                      ></i>
                    </td>

                    <td>
                      <span className="data-table">{item.phone}</span>
                      <i
                        className="data-table ri-file-copy-line"
                        style={{ paddingLeft: "10px" }}
                        onClick={() => copyToClipboard(item.phone)}
                      ></i>
                    </td>
                    <td>
                      <span className="data-table">{item.orders.length}</span>
                    </td>
                    <td>
                      <span className="data-table">{item.orderTotal}</span>
                    </td>
                    <td>
                      <span>Action</span>
                    </td>
                    <td>
                      <span className="data-table">{item.vendorSince}</span>
                    </td>
                    <td className="status">
                      <span className={getStatusClasses(item.status)}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </CardBody>
      {copyStatus && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {copyStatus}
        </div>
      )}
    </>
  );
};

export default DataTable;
