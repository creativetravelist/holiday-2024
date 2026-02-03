import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// material-ui
import { Box } from "@mui/material";
import { ReactComponent as Route1 } from "assets/images/route-1.svg";
import { ReactComponent as Route2 } from "assets/images/route-2.svg";
import { ReactComponent as Route3 } from "assets/images/route-3.svg";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import EnvelopModal from "./components/EnvelopModal";
import Step1Modal from "./components/Step1Modal";
import Step2Modal from "./components/Step2Modal";
import Step3Modal from "./components/Step3Modal";
import style from "./styles";

const { IMAGES, STEP_OPTIONS } = CONFIG;

const Map = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const { finished } = location.state || {};

  const [isShowModal, setIsShowModal] = useState(null);
  const [finishedStep, setFinishedStep] = useState({
    [STEP_OPTIONS[1]]: false,
    [STEP_OPTIONS[2]]: false,
    [STEP_OPTIONS[3]]: false,
  });
  const [isShowEnvelopModal, setIsShowEnvelopModal] = useState(false);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const key = "hasSentGaView";

    // 檢查是否已執行
    const hasSentGaView = sessionStorage.getItem(key);
    if (!hasSentGaView) {
      sessionStorage.setItem(key, "true");
    }
  }, []);

  useEffect(() => {
    if (finished) setFinishedStep(finished);
  }, [finished]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 600);
    }
  }, [location]);

  useEffect(() => {
    //如果 finishedStep 全部都是 true, show envelop modal
    if (Object.values(finishedStep).every((step) => step)) {
      setIsShowEnvelopModal(true);
    }
  }, [finishedStep]);

  const handleClickStep = (step) => {
    setIsShowModal(step);
  };

  const handleOnClose = () => {
    setIsShowModal(false);
  };

  const handleOnCloseEnvelopModal = () => {
    setIsShowEnvelopModal(false);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollHeight = container.scrollTop;
    const containerHeight = container.clientHeight;
    const threshold = containerHeight * 0.3;

    if (scrollHeight > threshold) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={style.contentSx} className="map-page">
      <div className="scroll" ref={containerRef}>
        <Box sx={style.imgContainerSx}>
          <Box
            sx={style.progressSx}
            className={`${showBg ? "show-bg" : ""} ${
              isShowModal ? "hidden" : ""
            }`}
          >
            <CustomImage
              src={IMAGES.COLLECTION_TITLE}
              alt="collevtion-title"
              className="map-progress"
            />
            <Box sx={style.jewelryContainerSx}>
              <CustomImage
                src={IMAGES.COLLECTION_JEWELRY_0}
                alt="jewelry-0"
                className={`jewelry jewelry-0 ${
                  finishedStep[STEP_OPTIONS[1]] ? "active" : ""
                }`}
              />
              <CustomImage
                src={IMAGES.COLLECTION_JEWELRY_1}
                alt="jewelry-1"
                className={`jewelry jewelry-1 ${
                  finishedStep[STEP_OPTIONS[2]] ? "active" : ""
                }`}
              />
              <CustomImage
                src={IMAGES.COLLECTION_JEWELRY_2}
                alt="jewelry-2"
                className={`jewelry jewelry-2 ${
                  finishedStep[STEP_OPTIONS[3]] ? "active" : ""
                }`}
              />
            </Box>
          </Box>
          <CustomImage
            src={IMAGES.MAP_TITLE}
            alt="map-title"
            className="map-title"
          />
          <Box
            className={`route route-1 ${
              finishedStep[STEP_OPTIONS[1]] ? "active" : ""
            }`}
          >
            <Route1 />
          </Box>
          <Box
            onClick={() => handleClickStep(STEP_OPTIONS[1])}
            className="sparkle-container"
            id="step1"
          >
            <CustomImage
              src={IMAGES.STEP2_SPARKLE}
              alt="step1-sparkle"
              className="sparkle step1-sparkle"
            />
          </Box>
          <Box
            className={`route route-2 ${
              finishedStep[STEP_OPTIONS[2]] ? "active" : ""
            }`}
          >
            <Route2 />
          </Box>
          <Box
            onClick={() => handleClickStep(STEP_OPTIONS[2])}
            className="sparkle-container"
            id="step2"
          >
            <CustomImage
              src={IMAGES.STEP2_SPARKLE}
              alt="step2-sparkle"
              className="sparkle step2-sparkle"
            />
          </Box>
          <Box
            className={`route route-3 ${
              finishedStep[STEP_OPTIONS[3]] ? "active" : ""
            }`}
          >
            <Route3 />
          </Box>
          <Box
            onClick={() => handleClickStep(STEP_OPTIONS[3])}
            className="sparkle-container"
          >
            <CustomImage
              src={IMAGES.STEP2_SPARKLE}
              alt="step3-sparkle"
              className="sparkle step3-sparkle"
            />
          </Box>
        </Box>
        <CustomImage src={IMAGES.MAP_BG} alt="map" className="bg-img" />
      </div>
      <Step1Modal
        isShowModal={isShowModal === STEP_OPTIONS[1]}
        handleOnClose={handleOnClose}
        finishedStep={finishedStep}
      />
      <Step2Modal
        isShowModal={isShowModal === STEP_OPTIONS[2]}
        handleOnClose={handleOnClose}
        finishedStep={finishedStep}
      />
      <Step3Modal
        isShowModal={isShowModal === STEP_OPTIONS[3]}
        handleOnClose={handleOnClose}
        finishedStep={finishedStep}
      />
      <EnvelopModal
        isShowModal={isShowEnvelopModal}
        handleOnClose={handleOnCloseEnvelopModal}
      />
    </Box>
  );
};

export default Map;
