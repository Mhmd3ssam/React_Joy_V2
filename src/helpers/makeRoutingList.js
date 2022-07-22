import { MODS_ICONS } from "../constants/icons";

function makeRoutingList({ permissions }) {
  return [
    {
      navName: "dashboard",
      navLink: "/dashboard",
      icon: MODS_ICONS.dashboard,
      active: true,
    },
    {
      navName: "orders",
      navLink: "/orders",
      icon: MODS_ICONS.orders,
      active: true,
    },
    {
      navName: "facilities",
      navLink: "/facilities",
      icon: MODS_ICONS.facilities,
      active: true,
    },
    {
      navName: "customers",
      navLink: "/customers",
      icon: MODS_ICONS.customers,
      active: true,
    },
    {
      navName: "invoices",
      navLink: "/invoices",
      icon: MODS_ICONS.invoices,
      active: true,
    },
    {
      navName: "transactions",
      navLink: "/transactions",
      icon: MODS_ICONS.transactions,
      active: true,
    },
    {
      navName: "wallet",
      navLink: "/wallet",
      icon: MODS_ICONS.wallet,
      active: true,
    },
    {
      navName: "services",
      navLink: "/services",
      icon: MODS_ICONS.services,
      active: true,
    },
    {
      navName: "team",
      navLink: "/team",
      icon: MODS_ICONS.team,
      active: true,
    },
    {
      navName: "settings",
      navLink: "/settings",
      icon: MODS_ICONS.settings,
      active: true,
    },
  ];
}

export default makeRoutingList;
