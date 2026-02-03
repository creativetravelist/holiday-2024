import { styled } from "@mui/material/styles";

// styles
export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, mt: marginTop }) => ({
  marginTop: `calc(${marginTop} + 8px)`,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
  width: "100%",
  maxWidth: "430px",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
}));
