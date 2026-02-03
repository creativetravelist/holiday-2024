import { sparkleAnimation } from "utils/style";

export default {
  contentSx: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background:
      'url("https://dak6ovdfbyw15.cloudfront.net/img/5/hw-holiday-2024/opening-bg.png") no-repeat center center',
    backgroundSize: "cover",
    "&.opening-page": {
      width: "100%",
      "& .opening-title": {
        width: "60%",
        margin: "12% auto 0 auto",
      },
    },
  },
  sparkleTopContainerSx: {
    position: "absolute",
    top: "-6%",
    left: "0",
    // animation: `${showfromLeft} 2s 1 cubic-bezier(0.2, 0.4, 0.92, 1) `,
    animationDelay: "2s",
    transformOrigin: "bottom left",
    width: "100%",
    overflow: "hidden",
    "& .sparkle-top": {
      width: "100%",
      margin: "0 auto",
      animation: `${sparkleAnimation} 2s  ease-in-out infinite alternate forwards`,
      animationDelay: "2s",
      animationDelay: "0.5s",
    },
  },
  sparkleBottomContainerSx: {
    position: "absolute",
    top: "21%",
    right: "-34%",
    // animation: `${showfromBottom} 1.5s 1 cubic-bezier(0.2, 0.4, 0.92, 1) `,
    animationDelay: "2s",
    transformOrigin: "bottom left",
    width: "100%",
    overflow: "hidden",
    "& .sparkle-bottom": {
      width: "68%",
      margin: "0 auto",
      animation: `${sparkleAnimation} 2s ease-in-out infinite alternate forwards`,
      animationDelay: "2s",
      animationDelay: "0.5s",
    },
  },
  modalContentSx: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(max(500px, 56vh), 92vw)",
    height: "auto",
    background:
      'url("https://dak6ovdfbyw15.cloudfront.net/img/5/hw-holiday-2024/opening-popup-bg-v2.png") no-repeat center center',
    backgroundSize: "contain",
    "& .opening-rules-title": {
      width: "48%",
      margin: "0% auto",
      paddingTop: "12%",
      display: "flex",
    },
    "& .opening-sections": {
      width: "100%",
      display: "flex",
      "&.section4": {
        margin: "10% auto 5% auto",
      },
    },
    "& .opening-rules-btn": {
      width: "58%",
      bottom: "calc(10% - 10px)",
      margin: "0 auto",
      paddingBottom: "10%",
      display: "flex",
    },
  },
  sectionsContainerSx: {
    height: "60vh",
    maxHeight: "120vw",
    width: "min(max(300px, 38vh), calc(77vw - 30px))",
    overflowY: "scroll",
    margin: "4% auto 2% auto",
    "&::-webkit-scrollbar": {
      webkitAppearance: "none",
      width: "2px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "#727171",
      boxShadow: "0 0 1px rgba(255,255,255,.5)",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "4px",
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  footerBtnSx: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    position: "absolute",
    bottom: "5%",
    left: "0",
    width: "100%",
    "& img": {
      width: "55%",
      margin: "0 auto",
    },
  },
};
