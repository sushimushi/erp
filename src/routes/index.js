import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Sell = lazy(() => import("../pages/Sell"));
const ReceiptsList = lazy(() => import("../pages/ReceiptsList"));
const ProductsList = lazy(() => import("../pages/ProductsList"));
const CustomersList = lazy(() => import("../pages/CustomersList"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Registers = lazy(() => import("../pages/Register/Registers"));
const RegistersDetails = lazy(() =>
  import("../pages/Register/RegistersDetails")
);
const ProductCategories = lazy(() =>
  import("../pages/ProductCategories/ProductCategories")
);
const ProductOptions = lazy(() => import("../pages/ProductOptions"));
const Taxes = lazy(() => import("../pages/Taxes"));
const Users = lazy(() => import("../pages/Users"));
const DiscountRules = lazy(() => import("../pages/DiscountRules"));
const AdditionalCharges = lazy(() => import("../pages/AdditionalCharges"));
const CustomFields = lazy(() => import("../pages/CustomFields"));
const Preferences = lazy(() => import("../pages/Preferences/Preferences"));
const Printers = lazy(() => import("../pages/Printers"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Subscription = lazy(() => import("../pages/Subscription"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
    title: "Dashboard",
  },
  {
    path: "/sell",
    component: Sell,
    title: "Sell",
  },
  {
    path: "/receipts",
    component: ReceiptsList,
    title: "Receipts",
  },
  {
    path: "/products",
    component: ProductsList,
    title: "Products",
  },
  {
    path: "/customers",
    component: CustomersList,
    title: "Customers",
  },
  {
    path: "/settings",
    component: Shop,
    title: "Shop",
  },
  {
    path: "/settings/shop",
    component: Shop,
    title: "Shop",
  },
  {
    path: "/settings/registers",
    component: Registers,
    title: "Register",
  },
  {
    path: "/settings/registers/:id",
    component: RegistersDetails,
    title: "RegisterDetails",
  },
  {
    path: "/settings/product-categories",
    component: ProductCategories,
    title: "Product Categories",
  },
  {
    path: "/settings/product-options",
    component: ProductOptions,
    title: "Product Options",
  },
  {
    path: "/settings/taxes",
    component: Taxes,
    title: "Taxes",
  },
  {
    path: "/settings/users",
    component: Users,
    title: "Users",
  },
  {
    path: "/settings/discount-rules",
    component: DiscountRules,
    title: "Discount Rules",
  },
  {
    path: "/settings/additional-charges",
    component: AdditionalCharges,
    title: "Additional Charges",
  },
  {
    path: "/settings/custom-fields",
    component: CustomFields,
    title: "Custom Fields",
  },
  {
    path: "/settings/preferences",
    component: Preferences,
    title: "Preferences",
  },
  {
    path: "/settings/printer",
    component: Printers,
    title: "Printer",
  },
  {
    path: "/forms",
    component: Forms,
    title: "Forms",
  },
  {
    path: "/subscription",
    component: Subscription,
    title: "Your Subscription",
  },
  {
    path: "/cards",
    component: Cards,
    title: "Cards",
  },
  {
    path: "/charts",
    component: Charts,
    title: "Charts",
  },
  {
    path: "/buttons",
    component: Buttons,
    title: "Buttons",
  },
  {
    path: "/modals",
    component: Modals,
    title: "Modals",
  },
  {
    path: "/tables",
    component: Tables,
    title: "Tables",
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
