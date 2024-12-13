import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import VendorCard from "../../Components/Important/VendorCard";
import { ReactComponent as Icon } from "../../assets/images/svg/icon-down.svg";
import Search from "../../Components/Important/Search";
import { ReactComponent as Filter } from "../../assets/images/svg/Filter.svg";
import { ReactComponent as Calendar } from "../../assets/images/svg/calendartable.svg";
import DataTable from "../../Components/Important/DataTable";

const CustomerDetails = () => {
  const column = [
    "Order Date",
    "Order Type",
    "Tracking ID",
    "Order Total",
    "Action",
    "Status",
  ];
  const customers = [
    {
      id: 1,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
      orders: [
        {
          orderNumber: "#743648",
          orderDate: "12 Aug 2022 - 12:25 am",
          orderType: "Home Delivery",
          trackingId: "9348fj73",
          orderTotal: "₦25,000.00",
          status: "Completed",
        },
        {
          orderNumber: "#743649",
          orderDate: "13 Aug 2022 - 12:45 am",
          orderType: "Home Delivery",
          trackingId: "9348fj74",
          orderTotal: "₦30,000.00",
          status: "In-Progress",
        },
      ],
    },
    {
      id: 2,
      vendorName: "John Doe",
      email: "john.d@mail.com",
      phone: "+2348123456789",
      vendorSince: "15 Sep 2022 - 10:00 am",
      status: "Active",
      orders: [
        {
          orderNumber: "#852963",
          orderDate: "16 Sep 2022 - 01:00 pm",
          orderType: "Pick Up",
          trackingId: "1234abcd",
          orderTotal: "₦15,000.00",
          status: "Pending",
        },
        {
          orderNumber: "#852964",
          orderDate: "17 Sep 2022 - 03:30 pm",
          orderType: "Home Delivery",
          trackingId: "5678efgh",
          orderTotal: "₦20,000.00",
          status: "Completed",
        },
      ],
    },
    {
      id: 3,
      vendorName: "Alice Smith",
      email: "alice.s@mail.com",
      phone: "+2348076543210",
      vendorSince: "20 Oct 2022 - 08:45 am",
      status: "Inactive",
      orders: [
        {
          orderNumber: "#963852",
          orderDate: "21 Oct 2022 - 09:00 am",
          orderType: "Home Delivery",
          trackingId: "abcd5678",
          orderTotal: "₦30,000.00",
          status: "Completed",
        },
      ],
    },
    {
      id: 4,
      vendorName: "Emeka Johnson",
      email: "emeka.j@mail.com",
      phone: "+2348067890123",
      vendorSince: "18 Nov 2022 - 07:15 am",
      status: "Active",
      orders: [
        {
          orderNumber: "#741852",
          orderDate: "19 Nov 2022 - 08:30 am",
          orderType: "Pick Up",
          trackingId: "wxyz9012",
          orderTotal: "₦18,000.00",
          status: "Completed",
        },
        {
          orderNumber: "#741853",
          orderDate: "20 Nov 2022 - 10:15 am",
          orderType: "Home Delivery",
          trackingId: "uvwx3456",
          orderTotal: "₦25,000.00",
          status: "In-Progress",
        },
      ],
    },
    {
      id: 5,
      vendorName: "Chioma Okafor",
      email: "chioma.o@mail.com",
      phone: "+2348098765432",
      vendorSince: "22 Dec 2022 - 09:00 am",
      status: "Inactive",
      orders: [
        {
          orderNumber: "#369852",
          orderDate: "23 Dec 2022 - 11:00 am",
          orderType: "Pick Up",
          trackingId: "abcd1234",
          orderTotal: "₦28,000.00",
          status: "Pending",
        },
        {
          orderNumber: "#369853",
          orderDate: "24 Dec 2022 - 02:00 pm",
          orderType: "Home Delivery",
          trackingId: "efgh5678",
          orderTotal: "₦32,000.00",
          status: "Completed",
        },
      ],
    },
  ];
  return (
    <div className="page-content">
      <BreadCrumb title="Customer" icon="home" />
      <Container fluid>
        <Row>
          <div className="p-0 d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <p className="order-details" style={{ paddingLeft: "4px" }}>
                Order Number
              </p>
              <p className="order-details" style={{ paddingLeft: "15px" }}>
                Customer Since
              </p>
              <p className="order-details" style={{ paddingLeft: "15px" }}>
                Tracking ID
              </p>
            </div>
            <div className="card-header-action">
              <button className="edit-btn " style={{ marginRight: "10px" }}>
                Edit Customer
                <Icon style={{ marginLeft: "4px" }} className="down-icon" />
              </button>
              <button className="suspended-btn">Suspended Customer</button>
            </div>
          </div>
        </Row>
        <Row>
         Row 2
        </Row>
        <Row>
          <Card>
            <CardHeader className="align-items-center d-flex ">
              <h4 className="card-title mb-0 flex-grow-1"></h4>
              <Search placeholder="Search" />
              <button
                className="btn-filter"
                style={{ marginLeft: "07px", marginRight: "07px" }}
              >
                <Filter style={{ marginRight: "07px" }} />
                Filter
              </button>
              <button className="btn-filter">
                <Calendar style={{ marginRight: "07px" }} />
                Filter
              </button>
            </CardHeader>
            <CardBody>
              <DataTable customerData={customers} column={column} />
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerDetails;
