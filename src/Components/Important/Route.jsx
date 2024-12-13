import React, { useState, useEffect } from "react";
import { ReactComponent as Vehicle } from "../../assets/images/svg/Ellipse-vehicle.svg";
import Icon from "../../assets/images/order.svg";
import Icon2 from "../../assets/images/svg/Vector.svg";
import { Spinner } from "reactstrap";

const Route = ({ routeData, title }) => {
  const [filterByStatus, setFilterByStatus] = useState(true);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [expandedRoutes, setExpandedRoutes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const updatedRoutes = routeData.filter((route) =>
        filterByStatus
          ? route.status === "inprogress"
          : route.status !== "deliverd"
      );
      setFilteredRoutes(updatedRoutes);
      setLoading(false);
    }, 500);
  }, [filterByStatus, routeData]);

  const toggleVehicles = (routeId) => {
    setExpandedRoutes((prev) => ({ ...prev, [routeId]: !prev[routeId] }));
  };

  const handleIcon1Click = () => setFilterByStatus(true);
  const handleIcon2Click = () => setFilterByStatus(false);

  return (
    <>
      <div className="icon-header align-items-center mt-2 mb-2">
        <span className="title-routes">{title}</span>
        <div>
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive me-2 ${
              filterByStatus ? "icon-active" : ""
            }`}
            src={Icon}
            alt="Icon"
            onClick={handleIcon1Click}
          />
          <img
            style={{ cursor: "pointer" }}
            className={`icon-inactive ${!filterByStatus ? "icon-active" : ""}`}
            src={Icon2}
            alt="Icon"
            onClick={handleIcon2Click}
          />
        </div>
      </div>

      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner color="dander" type="grow">
            Loading...
          </Spinner>
        </div>
      ) : !filteredRoutes.length ? (
        <p>No routes available.</p>
      ) : (
        filteredRoutes.map((route, index) => (
          <div key={index} className="route-card">
            <div className="route-header">
              <div className="d-flex">
                <h4 className="route-id">{route.routeId}</h4>
                <hr
                  className="m-0 hr-line"
                  style={{
                    width: "100%",
                    borderWidth: "2px",
                    textAlign: "right",
                    marginTop: "12px!important",
                    color: "#00000073",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <p className="route-destination">
                  {route.start} &mdash;&mdash;&gt; {route.destination}
                </p>
                <a style={{ color: "#1677FF" }} href="#" className="view-more">
                  View More
                </a>
              </div>
            </div>

            {route.vehicles.length > 0 ? (
              <div className="vehicles-list">
                {(expandedRoutes[route.routeId]
                  ? route.vehicles
                  : route.vehicles.slice(0, 3)
                ).map((vehicle, vehicleIndex) => (
                  <div key={vehicleIndex} className="vehicle-item">
                    <div className="d-flex m-0 justify-content-between align-items-center">
                      <div>
                        <Vehicle
                          style={{
                            marginRight: "5px",
                            width: "40px",
                            height: "36px",
                          }}
                        />
                        ID: {vehicle.id}
                      </div>
                      <div>
                        <p className="m-0">{vehicle.vehicleNumber}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="route-destination">
                        {route.start} &mdash;&mdash;&gt; {route.destination}
                      </p>
                      <p className="route-destination">
                        {route.status === "inprogress"
                          ? `Estimate Time: ${vehicle.estimateTime}`
                          : ` ${vehicle.pickupDate}`}
                      </p>
                    </div>
                  </div>
                ))}

                {route.vehicles.length > 3 && (
                  <div className="vehicle-summary">
                    <div
                      className="d-flex align-items-center mb-2"
                      onClick={() => toggleVehicles(route.routeId)}
                      style={{
                        cursor: "pointer",
                        color: "#1677FF",
                        marginTop: "10px",
                      }}
                    >
                      <Vehicle style={{ marginRight: "5px" }} />
                      <span className="text-muted">
                        {expandedRoutes[route.routeId]
                          ? "Show Less Vehicles"
                          : `${
                              route.vehicles.length - 3
                            }+ more vehicles available`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-muted">
                No vehicles available for this route.
              </p>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default Route;
