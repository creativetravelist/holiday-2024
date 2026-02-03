// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import style from "./styles";

const { IMAGES } = CONFIG;

const CustomModal = ({
  isShowModal,
  handleOnClick,
  onClose,
  contentSrc,
  btnSrc,
  btnClass,
  contentClass,
}) => {
  return (
    <Box sx={style.modalContainerSx} className={isShowModal ? "fadeIn" : ""}>
      <Box sx={style.modalContentSx}>
        <CustomImage
          src={contentSrc}
          alt="modal-content"
          className={`modal-content ${contentClass}`}
        />
        <CustomImage
          src={btnSrc}
          alt="modal-btn"
          className={`modal-btn ${btnClass}`}
          onClick={handleOnClick}
        />
        {onClose && (
          <CustomImage
            src={IMAGES.CLOSE_BTN}
            alt="close-btn"
            sx={style.closeBtnSx}
            onClick={onClose}
          />
        )}
      </Box>
    </Box>
  );
};

export default CustomModal;
