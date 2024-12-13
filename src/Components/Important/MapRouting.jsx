import React from "react";
import { Card, CardHeader } from "reactstrap";

  const MapRouting = ({ trackData , setActiveStatus, activeStatus }) => {
    const statusCodes = [
      ...new Set(trackData.map((item) => item.status.status_code)),
    ];
  
    return (
      <div className="shipping w-100 d-flex">
        {statusCodes.length > 0 ? (
          statusCodes.map((status, index) => (
            <span
              key={index}
              className={`badge badge-pill me-2 text-dark border ${
                activeStatus === status ? "bg-danger text-white" : "badge-light"
              }`}
              onClick={() =>
                setActiveStatus(activeStatus === status ? null : status)
              }
            >
              {status}
            </span>
          ))
        ) : (
          <div className="text-danger">No data found</div>
        )}
      </div>
    );
  };
  

export default MapRouting;
