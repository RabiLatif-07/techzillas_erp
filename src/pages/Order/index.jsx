import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import BarChart from "../../Components/Important/BarChat";
import Series from "./data.json";
import DonutChart from "../../Components/Important/DonutChart";
import ChartHeader from "../../Components/Important/ChartHeader";
import "./order.css";
import OrderTable from "../../Components/Important/OrderTable";
import OrderRequest from "../../Components/Important/OrderRequest";
import CompanyLogo from "../../assets/images/svg/CodeSandboxOutlined.svg";
import CompanyName from "../../assets/images/svg/companyname.svg";

const Index = () => {
  document.title = "Order | ERP";
  const [search, searchList] = useState("");
  const column = [
    "Order Id",
    "VENDOR",
    "STATUS",
    "DEPARTURE",
    "WEIGHT",
    "ARRIVAL",
    "ARRIVALDATE",
  ];
  const recentOrders = [
    {
      id: 1,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 2,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Active",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 3,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Cancelled",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 7,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 8,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const unloadingCargo = [
    {
      id: 1,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 2,
      shipmentId: "SHIPID03",
      status: "Cancelled",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 3,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      shipmentId: "SHIPID03",
      status: "Cancelled",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
      shipmentId: "SHIPID03",
      status: "Cancelled",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const availableCargo = [
    {
      id: 1,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 2,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 3,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const orderRequest = [
    {
      orderID: "ORDERID01",
      date: "16 July 2024",
      time: "18:00",
      status: "newOrder",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "123 Main St, Anytown, CA 12345",
      },
      destination: {
        address: "456 Elm St, Smalltown, NY 54321",
      },
      company: {
        name: "Raj Industries",
        logo: CompanyLogo,
        img: CompanyName,
      },
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      description:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
      ordersummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      route: "Mumbai ----> Delhi",
      },
    {
      orderID: "ORDERID02",
      date: "17 July 2024",
      status: "newOrder",
      time: "18:00",
      phone: "+91 7898164395",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",

      pickupLocation: {
        address: "789 Oak St, Metropolis, IL 62960",
      },
      destination: {
        address: "321 Pine St, Springfield, MO 65807",
      },
      company: {
        name: "Global Logistics",
        logo: CompanyLogo,
        img: CompanyName,
      },
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      description:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
      ordersummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        route: "Mumbai ----> Delhi",

      },
    {
      orderID: "ORDERID03",
      date: "18 July 2024",
      status: "newOrder",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      time: "18:00",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "456 Maple Ave, Gotham, NY 10001",
      },
      destination: {
        address: "789 Cedar Rd, Star City, SC 29201",
      },
      company: {
        name: "NextGen",
        logo: CompanyLogo,
        img: CompanyName,
      },
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      description:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
      ordersummary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      route: "Mumbai ----> Delhi",

      },
    {
      orderID: "ORDERID04",
      date: "19 July 2024",
      status: "cancel",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      time: "16:45",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "101 Birch St, Central City, KY 42330",
      },
      destination: {
        address: "202 Elm St, Coast City, CA 94546",
      },
      company: {
        name: "Prime Movers",
        logo: CompanyLogo,
        img: CompanyName,
      },
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
      "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
      ordersummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      route: "Mumbai ----> Delhi",

    },
    {
      orderID: "ORDERID05",
      date: "20 July 2024",
      time: "11:00",
      status: "cancel",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "303 Willow Ln, Bludhaven, NJ 08505",
      },
      destination: {
        address: "404 Oak Dr, Keystone, PA 17055",
      },
      company: {
        name: "Express Haulers",
        logo: CompanyLogo,
        img: CompanyName,
      },
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
      "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
    ordersummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    route: "Mumbai ----> Delhi",

    },
    {
      orderID: "ORDERID06",
      date: "20 July 2024",
      time: "11:00",
      status: "cancel",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "303 Willow Ln, Bludhaven, NJ 08505",
      },
      destination: {
        address: "404 Oak Dr, Keystone, PA 17055",
      },
      company: {
        name: "Express Haulers",
        logo: CompanyLogo,
        img: CompanyName,
      },
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
      "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
    ordersummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    route: "Mumbai ----> Delhi",

    },
    {
      orderID: "ORDERID07",
      date: "20 July 2024",
      time: "11:00",
      status: "cancel",
      website: "http://www.rajsuperwhite.com",
      industry: "Manufacturing",
      phone: "+91 7898164395",
      about:
        "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country.Raj Industries is one of the leading Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products.",
      pickupLocation: {
        address: "303 Willow Ln, Bludhaven, NJ 08505",
      },
      destination: {
        address: "404 Oak Dr, Keystone, PA 17055",
      },
      company: {
        name: "Express Haulers",
        logo: CompanyLogo,
        img: CompanyName,
      },
      location:
        "Village Pawa, GT Road, Near Civil Airport, Raj Industries, Ludhiana, Punjab 141120, IN",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
      "Raj Industries is one of the leading FMCG companies in northern India dealing in Personal and Home Care products. The company’s leading product ‘Raj Super White Laundry Bar’ commands a high market share and is trusted by around 1,50 ,000 retail stores all over the country",
    ordersummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    route: "Mumbai ----> Delhi",

    },
  ];

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row className="d-flex align-items-stretch">
          <Col xl="8" className="d-flex flex-column">
            <Row className="d-flex align-items-stretch mb-4">
              <Col xl="6" xxl="6" lg="6" className="d-flex recent-order-res">
                <Card className="w-100 h-100">
                  <ChartHeader title="Recents Orders" />
                  <CardBody>
                    <BarChart
                      Series={Series}
                      color={'["--vz-primary", "--vz-success", "#FFE58F"]'}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" xxl="6" lg="6" className="d-flex">
                <Card className="custom-cards w-100 h-100">
                  <ChartHeader title="Loading Trucks" />
                  <CardBody className="p-2">
                    <DonutChart
                      labels={[
                        "Active",
                        "Loading Delayed",
                        "Unloading Delayed",
                        "Ready to Load",
                        "Ready to Un-load",
                        "Canceled",
                      ]}
                      series={[44, 55, 41, 60, 25]}
                      dataColors={[
                        "#001D66",
                        "#DC4446",
                        "#69B1FF",
                        "#4096FF",
                        "#1677FF",
                        "#003EB3",
                      ]}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl="12" className="d-flex flex-column">
                <Card className="h-100">
                  <ChartHeader title="Latest Shipping" layout={true} />
                  <CardBody>
                    <OrderTable column={column} recentOrders={recentOrders} />
                  </CardBody>
                </Card>
                <Card className="h-100">
                  <ChartHeader title="Unloading Cargo" layout={true} />
                  <CardBody>
                    <OrderTable
                      column={false}
                      recentOrders={unloadingCargo}
                      inloading={true}
                    />
                  </CardBody>
                </Card>
                <Card className="h-100">
                  <ChartHeader title="Available Cargo" layout={true} />
                  <CardBody>
                    <OrderTable
                      column={false}
                      recentOrders={availableCargo}
                      availCargo={true}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="4" className="d-flex flex-column">
            <Card className="h-100">
              <ChartHeader
                title="Order Request"
                layout={true}
                search={true}
                placeholder="Search by order id"
                searchList={searchList}
              />
              <OrderRequest
                recentOrderRequest={orderRequest}
                search={search}
                title="Recent Order Requests"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
