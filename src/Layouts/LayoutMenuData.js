import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  const [isDashboard, setIsDashboard] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isConversations, setIsConversations] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState === "Orders")
      document.body.classList.add("twocolumn-panel");
    if (iscurrentState !== "Dashboard") setIsDashboard(false);
    if (iscurrentState !== "Orders") setIsOrders(false);
    if (iscurrentState !== "Customer") setIsCustomer(false);
    if (iscurrentState !== "Inventory") setIsInventory(false);
    if (iscurrentState !== "Conversations") setIsConversations(false);
    if (iscurrentState !== "Settings") setIsSettings(false);
  }, [iscurrentState]);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-apps-2-line",
      link: "/dashboard",
      stateVariables: isDashboard,
      click: (e) => {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "orders",
      label: "Orders",
      icon: "ri-shopping-bag-line",
      link: "/#",
      stateVariables: isOrders,
      click: (e) => {
        e.preventDefault();
        setIsOrders(!isOrders);
        setIscurrentState("Orders");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "delivery-tracking",
          label: "Delivery Tracking",
          link: "/delivery-tracking",
        },
        {
          id: "truck-optimization",
          label: "Truck Optimization",
          link: "/truck-optimization",
        },
        {
          id: "route-planning",
          label: "Route Planning",
          link: "/route-planning",
        },
      ],
    },
    {
      id: "customer",
      label: "Customer",
      icon: "ri-group-line",
      link: "/customer",
      stateVariables: isCustomer,
      click: (e) => {
        e.preventDefault();
        setIsCustomer(!isCustomer);
        setIscurrentState("Customer");
        updateIconSidebar(e);
      },
    },
    // {
    //   id: "inventory",
    //   label: "Inventory",
    //   icon: "ri-folder-reduce-line",
    //   // link: "/inventory",
    //   stateVariables: isInventory,
    //   // click: (e) => {
    //   //   e.preventDefault();
    //   //   setIsInventory(!isInventory);
    //   //   setIscurrentState("Inventory");
    //   //   updateIconSidebar(e);
    //   // },
    // },
    // {
    //   id: "conversations",
    //   label: "Conversations",
    //   icon: "ri-message-2-line",
    //   // link: "/conversations",
    //   stateVariables: isConversations,
    //   // click: (e) => {
    //   //   e.preventDefault();
    //   //   setIsConversations(!isConversations);
    //   //   setIscurrentState("Conversations");
    //   //   updateIconSidebar(e);
    //   // },
    // },
    // {
    //   id: "settings",
    //   label: "Settings",
    //   icon: "ri-settings-4-line",
    //   // link: "/settings",
    //   stateVariables: isSettings,
    //   // click: (e) => {
    //   //   e.preventDefault();
    //   //   setIsSettings(!isSettings);
    //   //   setIscurrentState("Settings");
    //   //   updateIconSidebar(e);
    //   // },
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
