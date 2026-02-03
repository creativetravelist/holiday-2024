import { Swiper, SwiperSlide } from 'swiper/react';
// material-ui
import CONFIG from 'configs/holiday';
import Card from './Card';

const { CARD_STEPS } = CONFIG;

const CardSwiper = ({
    handleSlideChange,
    activeIndex,
    handleClick,
    slideOptions,
    name,
    step,
    handleTextareaChange,
    handleOnBlur,
    inputColor
}) => {
    return (
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={-25}
            speed={1200}
            onSlideChange={handleSlideChange}
            initialSlide={activeIndex}
            onClick={handleClick}
            enabled={step === CARD_STEPS.CHOOSE}
            key={step}
        >
            {slideOptions.map((option, index) => (
                <SwiperSlide className="slideContainer" key={index}>
                    <Card
                        index={index}
                        name={name}
                        handleTextareaChange={handleTextareaChange}
                        step={step}
                        handleOnBlur={handleOnBlur}
                        slideOptions={slideOptions}
                        inputColor={inputColor}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardSwiper;
