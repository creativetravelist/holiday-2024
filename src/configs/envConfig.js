import { ENV_TYPES } from "configs/constant";

const configs = {
  // Env
  STAGE:
    process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || ENV_TYPES.PROD,

  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  BASE_NAME: "/",
  DEFAULT_PATH: "home", //
  defaultPath: false,
  BASE_ROUTE: window.BASE_ROUTE || process.env.REACT_APP_BASE_ROUTE || "",
  ADMIN_PATH: "",
};

console.log("configs:", configs);

export default configs;
