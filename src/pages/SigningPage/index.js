import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
// material-ui
import { Box, CircularProgress } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import CardSwiper from "./components/CardSwiper";
import style from "./styles";

const { IMAGES, CARD_OPTIONS, CARD_STEPS } = CONFIG;

const SigningPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hash = location.hash.slice(1);

  const [activeIndex, setActiveIndex] = useState(CARD_OPTIONS[1]);
  const [name, setName] = useState("");
  const [step, setStep] = useState(CARD_STEPS.CHOOSE); // 1. choose card, 2. signing, 3. share
  const [html2canvasBlob, setHtml2canvasBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    switch (hash) {
      case "signing":
        setStep(CARD_STEPS.SIGNING);
        break;
      case "share":
        setStep(CARD_STEPS.SHARE);
        break;
      default:
        setStep(CARD_STEPS.CHOOSE);
        break;
    }
  }, [hash]);

  useEffect(() => {
    const slide = document.querySelector(".swiper");
    if (!slide) return;
    slide.style.transition = "transform 1.5s";

    switch (step) {
      case CARD_STEPS.SIGNING:
        slide.style.transform = "scale(1.5)  translateY(5vh)";
        break;
      case CARD_STEPS.CHOOSE:
        slide.style.transform = "scale(1)  translateY(0)";
        break;
      default:
        break;
    }
  }, [step]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(String(swiper.activeIndex));
  };

  const handleClick = (swiper) => {
    const clickedIndex = swiper.clickedIndex;

    if (clickedIndex !== undefined && clickedIndex !== swiper.activeIndex) {
      swiper.slideTo(clickedIndex, 1200); // 使用與 Swiper 相同的速度
    }
  };

  const handleOnClickSigning = () => {
    setStep(CARD_STEPS.SIGNING);
    navigate("/signing#signing");
  };

  const getBlob = async () => {
    const el = document.querySelector(`#complete${activeIndex}`);
    return html2canvas(el, {
      logging: false,
      useCORS: true,
      allowTaint: false,
      scale: 2,
      backgroundColor: null,
    }).then((canvas) => {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          setHtml2canvasBlob(blob);
          resolve(blob); // 返回 blob 結果
        }, "image/png");
      });
    });
  };

  const handleOnShare = async () => {
    // setIsLoading(true);
    // const blob = await getBlob();
    // const formData = new FormData();
    // formData.append("file", blob);
  };

  const handleTextareaChange = (e) => {
    const inputText = e.target.value;
    setName(inputText);
  };

  const handleOnBlur = async (e) => {
    //處理 viewport 被鍵盤遮住，將畫面移到原始位置
    window.scrollTo(0, 0);

    if (e.target.value.trim() !== "") {
      setStep(CARD_STEPS.SHARE);
      navigate("/signing#share");
      await getBlob();
    } else {
      setStep(CARD_STEPS.CHOOSE);
      navigate("/signing");
    }
  };

  const titleImg = {
    [CARD_STEPS.CHOOSE]: {
      imgSrc: IMAGES.SIGNING_CHOOSE_CARD_TITLE,
    },
    [CARD_STEPS.SIGNING]: {
      imgSrc: IMAGES.SIGNING_TITLE,
      imgStyle: { width: "30%" },
    },
    [CARD_STEPS.SHARE]: {
      imgSrc: IMAGES.SIGNING_COMPLETE_TITLE,
    },
  };

  const btnImg = {
    [CARD_STEPS.CHOOSE]: {
      imgSrc: IMAGES.SIGNING_CHOOSE_CARD_BTN,
      onClick: handleOnClickSigning,
    },
    [CARD_STEPS.SIGNING]: {
      imgSrc: null,
      onClick: () => {},
    },
    [CARD_STEPS.SHARE]: {
      imgSrc: IMAGES.SIGNING_COMPLETE_BTN,
      onClick: handleOnShare,
    },
  };

  const slideOptions = [
    {
      imgSrc: IMAGES.CARD3,
      imgWithoutShadow: IMAGES.CARD3_WITHOUT_SHADOW,
    },
    {
      imgSrc: IMAGES.CARD2,
      imgWithoutShadow: IMAGES.CARD2_WITHOUT_SHADOW,
    },
    {
      imgSrc: IMAGES.CARD1,
      imgWithoutShadow: IMAGES.CARD1_WITHOUT_SHADOW,
    },
  ];

  const handleGoBack = () => {
    handleOnClickSigning();
  };

  return (
    <Box sx={style.contentSx}>
      <Box sx={style.fullPageLoadingSx} className={isLoading ? "show" : "hide"}>
        <CircularProgress />
      </Box>
      <CustomImage
        src={titleImg[step].imgSrc}
        alt="signing-title"
        className="signing-title"
        style={{ ...titleImg[step].imgStyle }}
      />
      {step === CARD_STEPS.SHARE ? (
        <Box className="cardContainer">
          <Card
            index={activeIndex}
            name={name}
            handleTextareaChange={handleTextareaChange}
            step={step}
            handleOnBlur={handleOnBlur}
            slideOptions={slideOptions}
          />
          <Box id={`complete${activeIndex}`} className={`hidden`}>
            <Box sx={style.cardFromSx} className="input-container">
              <input
                id="recipient"
                value={name}
                placeholder="Name"
                disabled={true}
                style={{ borderBottom: "none" }}
              />
            </Box>
            <CustomImage
              src={slideOptions[activeIndex].imgWithoutShadow}
              alt={`card${activeIndex}`}
            />
          </Box>
        </Box>
      ) : (
        <CardSwiper
          handleSlideChange={handleSlideChange}
          activeIndex={activeIndex}
          handleClick={handleClick}
          slideOptions={slideOptions}
          name={name}
          enabled={step === CARD_STEPS.SIGNING}
          step={step}
          handleTextareaChange={handleTextareaChange}
          handleOnBlur={handleOnBlur}
        />
      )}

      <Box sx={style.footerBtnSx}>
        {btnImg[step].imgSrc && (
          <CustomImage
            src={btnImg[step].imgSrc}
            alt="opening-btn"
            onClick={btnImg[step].onClick}
          />
        )}
        {step === CARD_STEPS.SHARE && (
          <CustomImage
            src={IMAGES.BACK_BTN}
            alt="back-btn"
            className="back-btn"
            onClick={handleGoBack}
          />
        )}
      </Box>
    </Box>
  );
};

export default SigningPage;
