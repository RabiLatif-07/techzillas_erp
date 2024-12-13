import React, { useState } from "react";
import usflag from "../../assets/images/flags/us.svg";

import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { country } from "../../common/data";

const CustomModal = ({ isOpen, toggleModal }) => {
  const toggle4 = () => setDropdownOpen4((prevState) => !prevState);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [seletedCountry3, setseletedCountry3] = useState({
    id: 240,
    flagImg: usflag,
    countryName: "United States of America",
    countryCode: "+1",
  });

  const toggleFields = () => {
    const fields = document.getElementById("address-fields");
    fields.style.display = fields.style.display === "none" ? "block" : "none";
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          <p className="modal-title mb-3">Add a New Customer</p>
          <p className="customer-text">Customer Information</p>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row g-3">
              <Col xxl={6}>
                <div>
                  <Input
                    className="input-form mb-2"
                    type="text"
                    id="customerName"
                    placeholder="Customer Name"
                  />
                </div>
              </Col>
              <Col xxl={6}>
                <div>
                  <Input
                    className="input-form mb-2"
                    type="email"
                    id="emailInput"
                    placeholder="Customer Email"
                  />
                </div>
              </Col>
              <div class="d-flex mb-2">
                <div style={{width:"100%"}}>
                  <Dropdown
                    className="input-group"
                    isOpen={dropdownOpen4}
                    toggle={toggle4}
                  >
                    <DropdownToggle
                      as="button"
                      className="btn btn-light border arrow-none"
                    >
                      <img
                        src={seletedCountry3.flagImg}
                        alt="country flag"
                        className="options-flagimg"
                        height="20"
                      />
                      <span className="countrylist-codeno text-muted">
                        {seletedCountry3.countryCode}
                      </span>
                    </DropdownToggle>
                    <Input
                      style={{marginLeft:"10px"}}
                      type="number"
                      className="input-form rounded-end flag-input"
                      placeholder="Enter number"
                    />
                    <DropdownMenu
                      as="ul"
                      className="list-unstyled w-100 dropdown-menu-list mb-0"
                    >
                      <SimpleBar
                        style={{ maxHeight: "220px" }}
                        className="px-3"
                      >
                        {(country || []).map((item, key) => (
                          <DropdownItem
                            as="li"
                            onClick={() => setseletedCountry3(item)}
                            key={key}
                            className="dropdown-item d-flex"
                          >
                            <div className="flex-shrink-0 me-2">
                              <img
                                src={item.flagImg}
                                alt="country flag"
                                className="options-flagimg"
                                height="20"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex">
                                <div className="country-name me-1">
                                  {item.countryName}
                                </div>
                                <span className="countrylist-codeno text-muted">
                                  {item.countryCode}
                                </span>
                              </div>
                            </div>
                          </DropdownItem>
                        ))}
                      </SimpleBar>
                    </DropdownMenu>
                  </Dropdown>

                 
                </div>
              </div>

              <div class="address-toggle">
                <label
                  className="add-address"
                  style={{ marginRight: "10px", color: "#2B2F32" }}
                >
                  Add Address
                </label>
                <label class="switch">
                  <Input type="checkbox" />
                  <span class="slider round" onClick={toggleFields}></span>
                </label>
              </div>
              <div
                id="address-fields"
                style={{ display: "none", marginTop: "20px" }}
              >
                <Input
                  type="text"
                  placeholder="Building No., Street Address"
                  className="input-form mb-4"
                />
                <Input
                  type="text"
                  placeholder="City"
                  className="input-form mb-4"
                />

                <select
                  class="input-form mb-3"
                  style={{ marginRight: "09px", width: "49%" }}
                >
                  <option value="">Country</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                <select class="input-form mb-3" style={{ width: "49%" }}>
                  <option value="">State</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                </select>
                <div class="d-flex">
                  <label
                    className="add-address d-flex"
                    style={{ marginRight: "10px" }}
                  >
                    Billing Address
                    <p style={{ marginLeft: "10px", fontSize: "13px" }}>
                      Same as Customer Address
                    </p>
                  </label>
                  <label class="switch">
                    <Input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div className="hstack gap-2 justify-content-center">
                  <Button className="cancel-btn" onClick={toggleModal}>
                    Cancel
                  </Button>
                  <Button className="add-btn" color="primary">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomModal;
