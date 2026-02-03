import CustomImage from 'customComponents/CustomImage';
// material-ui
import { Box } from '@mui/material';
import CONFIG from 'configs/holiday';

import style from '../styles';

const { CARD_STEPS } = CONFIG;

const Card = ({ index, name, handleTextareaChange, step, handleOnBlur, slideOptions }) => {
    const onBlurInput = (e) => {
        handleOnBlur(e);
    };

    const inputStyle = { borderBottom: step === CARD_STEPS.SHARE ? 'none' : `1px solid #fff` };

    return (
        <Box sx={style.cardContainerSx} className={`card card-${index}`}>
            <Box sx={style.cardFromSx}>
                <input
                    id="recipient"
                    value={name}
                    onChange={handleTextareaChange}
                    placeholder="Name"
                    disabled={step !== CARD_STEPS.SIGNING}
                    onBlur={onBlurInput}
                    style={inputStyle}
                    className={`${!name && 'shine'}`}
                />
            </Box>
            <CustomImage src={slideOptions[index].imgSrc} alt={`card${index}`} />
        </Box>
    );
};
export default Card;
