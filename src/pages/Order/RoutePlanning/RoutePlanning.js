import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
  CardHeader,
} from "reactstrap";
import ChartHeader from "../../../Components/Important/ChartHeader";
import Route from "../../../Components/Important/Route";
import MapRouting from "../../../Components/Important/MapRouting";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ReactComponent as BtnIcon } from "../../../assets/images/svg/AddCircle.svg";
import TrackCard from "../../../Components/Important/TrackCard";
import Shipper from "../../../assets/images/InboxOutlined.png";

const RoutePlanning = () => {
  const routes = [
    {
      routeId: "ROUTEAA001",
      start: "Mumbai",
      destination: "Delhi",
      status: "delivered",
      vehicles: [
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA002",
      start: "Chennai",
      destination: "Bangalore",
      status: "inprogress",
      vehicles: [
        {
          id: "SHIPID01235",
          route: "Chennai → Bangalore",
          vehicleNumber: "KA01AB5678",
          estimateTime: "8 Hrs",

          shipmentId: "SHIPID10002",
          pickupDate: "2024-12-06T09:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA003",
      start: "Pune",
      destination: "Hyderabad",
      vehicles: [
        {
          id: "SHIPID01236",
          route: "Pune → Hyderabad",
          vehicleNumber: "TS07CD3456",
          estimateTime: "7 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10003",
          pickupDate: "2024-12-07T12:00:00",
        },
        {
          id: "SHIPID01236",
          route: "Pune → Hyderabad",
          vehicleNumber: "TS07CD3456",
          estimateTime: "7 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10003",
          pickupDate: "2024-12-07T12:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA004",
      start: "Kolkata",
      destination: "Guwahati",
      vehicles: [
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10004",
          pickupDate: "2024-12-08T15:00:00",
        },
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10004",
          pickupDate: "2024-12-08T15:00:00",
        },
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "delivered",
          shipmentId: "SHIPID10004",
          pickupDate: "2024-12-08T15:00:00",
        },
        
      ],
    },
    
  ];
  const trackData = [
    {
      id: 1,
      shipId: "ShipID0123",
      status: {
        status_code: "Arriving",
        ship_date_time: "27 November 2024, 14:00",
      },
      shipNo: "DL04MP7045",
      maxLoad: "6.5 Ton",
      route: {
        departure: "Delhi",
        stops: ["Chandigarh", "Lonavala"],
        arrival: "Mumbai",
        route_code: "A002",
      },
      shipper: {
        id: "Driv012345",
        name: "John Doe",
        phone: "+911234567890",
        pic: Shipper,
      },
      tracking_url: "https://example.com/tracking/ShipID0123",
    },
    {
      id: 2,
      shipId: "ShipID0124",
      status: {
        status_code: "Departed",
        ship_date_time: "26 November 2024, 10:00",
      },
      shipNo: "DL04MP8080",
      maxLoad: "5 Ton",
      route: {
        departure: "Bangalore",
        stops: ["Mysore", "Pune"],
        arrival: "Hyderabad",
        route_code: "B105",
      },
      shipper: {
        id: "Driv056789",
        name: "Jane Smith",
        phone: "+918765432109",
        pic: Shipper,
      },
      tracking_url: "https://example.com/tracking/ShipID0124",
    },
    {
      id: 3,
      shipId: "ShipID0124",
      status: {
        status_code: "Active",
        ship_date_time: "26 November 2024, 10:00",
      },
      shipNo: "DL04MP8080",
      maxLoad: "5 Ton",
      route: {
        departure: "Bangalore",
        stops: ["Mysore", "Pune"],
        arrival: "Hyderabad",
        route_code: "B105",
      },
      shipper: {
        id: "Driv056789",
        name: "Jane Smith",
        phone: "+918765432109",
        pic: Shipper,
      },
      tracking_url: "https://example.com/tracking/ShipID0124",
    },
    {
      id: 4,
      shipId: "ShipID0124",
      status: {
        status_code: "Arriving",
        ship_date_time: "26 November 2024, 10:00",
      },
      shipNo: "DL04MP8080",
      maxLoad: "5 Ton",
      route: {
        departure: "Bangalore",
        stops: ["Mysore", "Pune"],
        arrival: "Hyderabad",
        route_code: "B105",
      },
      shipper: {
        id: "Driv056789",
        name: "Jane Smith",
        phone: "+918765432109",
        pic: Shipper,
      },
      tracking_url: "https://example.com/tracking/ShipID0124",
    },
  ];

  const [searchRoutes, setSearchRoutes] = useState("");
  const [activeStatus, setActiveStatus] = useState(null);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [loadingRoutes, setLoadingRoutes] = useState(false);

  useEffect(() => {
    let filteredOrders = routes;
    if (searchRoutes.trim() !== "") {
      filteredOrders = filteredOrders.filter((item) =>
        item.routeId.toLowerCase().includes(searchRoutes.toLowerCase())
      );
    }
    if (activeStatus) {
      setLoadingRoutes(true);
      filteredOrders = filteredOrders.filter(
        (item) => item.status === activeStatus
      );
    }

    setTimeout(() => {
      setFilteredRoutes(filteredOrders);
      setLoadingRoutes(false);
    }, 500);
  }, [searchRoutes, activeStatus]);

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl={8}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between ">
                  <p className="route-planning">Route Planning</p>
                  <button className="new-route-btn">
                    <BtnIcon style={{ marginRight: "5px" }} />
                    New Route
                  </button>
                </div>
              </CardHeader>
              <Col xl={7} style={{marginLeft:"10px"}}>
                <Card className="h-100 border">
                  <ChartHeader
                    title="Vehicles"
                    layout={true}
                    search={true}
                    placeholder="Search by Shipment ID"
                  />
                  <CardBody className="ship-cardbody">
                    <MapRouting
                      trackData={trackData}
                      setActiveStatus={setActiveStatus}
                      activeStatus={activeStatus}
                    />
                    {trackData.map((item) => (
                      <TrackCard key={item.id} item={item} />
                    ))}
                  </CardBody>
                </Card>
              </Col>
            </Card>
          </Col>

          <Col xl={4}>
            <Card className="h-100">
              <ChartHeader
                title="Routes"
                layout={true}
                search={true}
                placeholder="Search by Route No"
                searchList={setSearchRoutes}
              />
              <CardBody>
                <Route routeData={filteredRoutes} title="Routes" />
                {loadingRoutes && (
                  <div className="d-flex align-items-center justify-content-center mt-6 mb-6">
                    <Spinner color="dander" type="grow">
                      Loading...
                    </Spinner>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoutePlanning;
