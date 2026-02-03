export default {
  modalContainerSx: {
    background: "#00000080",
    height: "100vh",
    width: "100%",
    overflowY: "scroll",
    opacity: "0",
    height: "0",
    position: "absolute",
    zIndex: "10",
    backgroundSize: "cover",
    transition: "opacity 0.5s ease",
    "&.fadeIn": {
      opacity: "1",
      height: "100vh",
      "& .opening-rules": {
        display: "block",
        opacity: "1",
        transition: "opacity 1s ease",
      },
    },
  },
  modalContentSx: {
    width: "100%",
    maxWidth: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    "& .modal-content": {
      width: "80%",
      "&.step1-wallpaper": {
        transform: "translate(-50%, -50%)",
      },
    },
    "& .modal-btn": {
      width: "58%",
      position: "absolute",
      bottom: "50%",
      left: "50%",
      transform: "translate(-50%, 290%)",
      "&.step1-wallpaper-btn": {
        width: "45%",
        transform: "translate(-50%, 1185%)",
      },
      "&.envelope-btn": {
        width: "37%",
        transform: "translate(-62%, 35%)",
      },
      "&.begin-modal-btn": {
        transform: "translate(-50%, 188%)",
      },
    },
  },
  closeBtnSx: {
    width: "6.5%",
    position: "absolute",
    cursor: "pointer",
    top: "0%",
    right: "0%",
    transform: "translate(-80%, -90%)",
  },
};
