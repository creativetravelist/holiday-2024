import { draw } from "utils/style";

export default {
  contentSx: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    "& .scroll": {
      width: "100%",
      height: "100vh",
      position: "absolute",
      overflowY: "scroll",
      overflowX: "hidden",
      "& .bg-img": {
        width: "100%",
        verticalAlign: "top",
        height: "auto",
        zIndex: "-1",
      },
    },
  },
  progressSx: {
    position: "absolute",
    top: "0",
    height: "20vh",
    width: "100%",
    transition: "opacity 0.5s ease",
    "&.show-bg": {
      background: "linear-gradient(#3D5788CC 3%, #739ECE80, #FFFFFF00 100%)",
    },
    "&.hidden": {
      opacity: "0",
      height: "0",
    },
  },
  imgContainerSx: {
    width: "100%",
    position: "absolute",
    "& .map-progress": {
      zIndex: "10",
      width: "38%",
      display: "flex",
      margin: "6% auto 0 auto",
    },
    "& .map-title": {
      zIndex: "10",
      width: "28%",
      display: "flex",
      margin: "36% auto 0 auto",
    },
    "& .sparkle-container": {
      zIndex: "10",
      position: "relative",
    },
    "& .sparkle": {
      display: "flex",
      // animation: `${sparkleHintAnimation} 3s  ease-in-out infinite alternate forwards`,
      "&.step1-sparkle": {
        width: "40%",
        margin: "-80% auto auto 33%",
      },
      "&.step2-sparkle": {
        width: "39%",
        margin: "0% auto 0 17.5%",
      },
      "&.step3-sparkle": {
        width: "38%",
        margin: "-24% auto 0 34%",
      },
    },
    "& .route": {
      opacity: "0.3",
      zIndex: "1",
      position: "relative",
      display: "flex",
      "&.active": {
        opacity: "1",
      },
      "& svg": {
        width: "100%",
        height: "100%",
      },
      "& path": {
        strokeDasharray: "24 24",
        strokeDashoffset: "1000",
        animation: `${draw} 22.5s linear forwards infinite`,
      },
    },
    "& .route-1": {
      width: "50%",
      margin: "61% auto",
    },
    "& .route-2": {
      width: "77%",
      margin: "-7% auto auto 8%",
    },
    "& .route-3": {
      width: "85%",
      margin: "-9% auto 0 0 ",
    },
  },
  jewelryContainerSx: {
    display: "flex",
    justifyContent: "center",
    "& .jewelry": {
      zIndex: "10",
      height: "min(9vh, 17vw)",
      display: "flex",
      marginTop: "3.5%",
      opacity: ".5",
      "& img": {
        height: "100%",
      },
      "&.active": {
        opacity: "1",
      },
    },
  },
  targetSx: {
    position: "absolute",
    left: "0",
    bottom: "0",
    transform: "translate(0%, -76%)",
    width: "25%",
    height: "15%",
  },
};
