export default {
  toolsContenerSx: {
    display: "flex",
    width: "100%",
    position: "absolute",
    padding: "10px",
    alignItems: "center",
    gap: "10px",
    zIndex: "10",
  },
  toolsSx: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& .arrow img": {
      transition: "transform .7s ease",
    },
    "& .arrow.rotate180 img": {
      transform: "rotate(180deg)",
    },
  },
  musicImageSx: {
    width: "8%",
    maxWidth: "100px",
    cursor: "pointer",
  },
};
