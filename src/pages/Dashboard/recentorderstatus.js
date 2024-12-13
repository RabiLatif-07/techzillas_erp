import React from "react";
const getStatusClasses = (status) => {
  switch (status) {
    case "Completed":
      return "status-btn-completed";
    case "Pending":
      return "status-btn-pending";
    default:
      return "status-btn-pending";
  }
};

const RecentOrderStatus = ({ LiveOrders, returnValue }) => {
  return (
    <div className="table-responsive table-card" style={{ minHeight: "875px" }}>
      <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        <tbody>
          {LiveOrders?.length === 0 ? (
            <span>Data Not Available😭</span>
          ) : (
            <>
              {LiveOrders?.map((item, key) => (
                <tr key={key} className="table-td">
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-2">
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <h5 className="fs-14 my-1 fw-medium">
                          <span className="text-reset">{item.product}</span>
                        </h5>
                        <span>{item.price}</span>x<span>{item.quantity}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="text-muted">{item.date}</p>
                    {returnValue ? (
                      ""
                    ) : (
                      <span className={getStatusClasses(item.status)}>
                        {item.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrderStatus;
