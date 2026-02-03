/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import style from "./styles";

const { IMAGES, MUSIC } = CONFIG;

const Tools = ({ playMusic }) => {
  const audioRef = useRef(null);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    if (playMusic) {
      const obj = audioRef.current;
      if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        play();
      } else {
        obj.addEventListener("loadeddata", () => {
          if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) play();
        });
      }
    } else pause();
  }, [playMusic]);

  const play = () => {
    audioRef.current.play();
    setIsMusicPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsMusicPlaying(false);
  };

  const toggleMusic = (e) => {
    e.stopPropagation();

    if (audioRef.current.paused) play();
    else pause();
  };

  return (
    <Box sx={style.toolsContenerSx} data-html2canvas-ignore>
      <Box sx={style.toolsSx}>
        <CustomImage
          sx={style.musicImageSx}
          src={isMusicPlaying ? IMAGES.MUSIC_BTN : IMAGES.MUSIC_MUTE_BTN}
          alt="music"
          onClick={toggleMusic}
        />
      </Box>
      <audio ref={audioRef} autoPlay loop preload="auto">
        <source src={MUSIC.BG_MUSIC} type="audio/mp3" />
      </audio>
    </Box>
  );
};

export default Tools;
