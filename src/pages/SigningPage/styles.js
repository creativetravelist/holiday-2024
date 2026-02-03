import { hintAnimation } from "utils/style";

export default {
  contentSx: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    background:
      "url(https://dak6ovdfbyw15.cloudfront.net/img/5/hw-holiday-2024/signing-bg-img.png) no-repeat top center",
    backgroundSize: "cover",
    overflow: "hidden",
    "& .signing-title": {
      width: "53%",
      marginTop: "9vh",
    },
    "& .swiper": {
      width: "100%",
    },
    "& .swiper-slide": {
      width: "34vh",
      transition: "transform 1.2s ease, opacity 1s ease",
      "&.swiper-slide-active": {
        transform: "scale(1)",
        opacity: "1",
      },
      "&:not(.swiper-slide-active)": {
        transform: "scale(0.8)",
        opacity: "0.8",
      },
      "& img": {
        width: "100%",
      },
    },
    "& .slideContainer": {
      position: "relative",
    },
    "& .cardContainer": {
      display: "flex",
      justifyContent: "center",
      height: "60vh",
      marginTop: "5vh",
      "& .card": {
        height: "100%",
      },
      "& img": {
        height: "60vh",
        width: "auto",
      },
      "& .hidden": {
        position: "absolute",
        zIndex: "-10",
        height: "60vh",
        "& .input-container": {
          top: "15vh",
          left: "11.5vh",
        },
      },
    },
  },
  cardFromSx: {
    position: "absolute",
    top: "27%",
    left: "40%",
    "&.card-0": {
      margin: "0 0 41% 18%",
    },
    "&.card-2": {
      margin: "0 0 41% 18%",
    },
    "& input": {
      all: "unset",
      background: "transparent",
      fontFamily: "Times New Roman",
      fontStyle: "italic",
      color: "#fff",
      display: "block",
      outline: "none",
      fontSize: "1em",
      width: "80%",
      zIndex: "999",
      textAlign: "start",
      padding: "0 0 0 0.5em",
      borderBottom: "1px solid #fff",
      "&::placeholder": {
        color: "#fff",
        opacity: "0.4",
      },
      "&.shine": {
        animation: `${hintAnimation} .7s  ease-in-out infinite alternate`,
      },
    },
  },
  cardContainerSx: {
    position: "relative",
    width: "100%",
    height: "fit-content",
    background: "transparent",
  },
  footerBtnSx: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    position: "absoltue",
    bottom: "4%",
    left: "0",
    width: "100%",
    "& img": {
      width: "54%",
      margin: "0 auto",
    },
    "& .back-btn": {
      width: "8%",
      padding: "2% 0 0 0",
    },
  },
  fullPageLoadingSx: {
    display: "none",
    position: "absoltue",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    "&.show": {
      display: "flex",
    },
  },
};
