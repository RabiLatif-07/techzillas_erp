import React, { useState } from "react";
import {
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import Search from "./Search";

const ChartHeader = ({
  title,
  layout,
  search,
  searchList,
  placeholder,
  thisWeek,
}) => {
  const getPreviousMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonthIndex = new Date().getMonth();
    const lastThreeMonths = [];
    for (let i = 0; i < 4; i++) {
      const monthIndex = (currentMonthIndex - i + 12) % 12;
      lastThreeMonths.push(months[monthIndex]);
    }
    const totalMonthsSinceJan = currentMonthIndex + 1;
    return { lastThreeMonths, totalMonthsSinceJan };
  };

  const { lastThreeMonths, totalMonthsSinceJan } = getPreviousMonths();

  const [selectedMonth, setSelectedMonth] = useState(lastThreeMonths[0]);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <CardHeader className="align-items-center border-bottom d-flex">
      <div className="flex-grow-1 d-inline-flex align-items-center">
        <h4 className="card-title mb-0 pe-2">{title}</h4>
      </div>
      <div className="flex-shrink-1">
        {layout ? (
          <>
            {search ? (
              <Search searchList={searchList} placeholder={placeholder} />
            ) : (
              <div>
                {thisWeek ? (
                  <div className="flex-shrink-0">
                    <UncontrolledDropdown className="card-header-dropdown">
                      <DropdownToggle
                        tag="a"
                        className="text-reset dropdown-btn"
                        role="button"
                      >
                        <span className="week text-muted">
                          This Week
                          <i className="align-items-center ri-arrow-down-s-line"></i>
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>Year</DropdownItem>
                        <DropdownItem>Month</DropdownItem>
                        <DropdownItem>Week</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                ) : (
                  <button type="button" className="btn view-all">
                    View All
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <UncontrolledDropdown className="card-header-dropdown">
              <DropdownToggle
                tag="a"
                className="text-reset dropdown-btn d-flex align-items-center justify-content-center gap-2"
                role="button"
                style={{
                  border: "1px solid #e9ebec",
                  padding: "7px 8px 0px 10px",
                  borderRadius: "6px",
                }}
              >
                <h6 className="text-muted">{selectedMonth}</h6>
                <FeatherIcon
                  icon="chevron-down"
                  size="20"
                  style={{ marginTop: "-5px" }}
                />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end w-auto">
                {lastThreeMonths.slice(1).map((month, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => handleMonthSelect(month)}
                  >
                    {month}
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem onClick={() => handleMonthSelect(`Last ${totalMonthsSinceJan} months`)}>
                  {`Last ${totalMonthsSinceJan} months`}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        )}
      </div>
    </CardHeader>
  );
};

export default ChartHeader;
