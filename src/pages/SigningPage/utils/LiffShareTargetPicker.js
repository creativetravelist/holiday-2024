import configs from 'configs/envConfig';
import CONFIG from 'configs/holiday';

const liffShareTargetPicker = async (liff, info) => {
    if (!liff || !info) return;

    const { image } = info;

    const { SHARE_URL } = configs;
    const { IMAGES } = CONFIG;

    try {
        await liff.shareTargetPicker(
            [
                {
                    type: 'text',
                    text: 'Harry Winston的祝福已送達​\n​─────────​​\n誠摯邀請您進入Winston’s Winter Wonderland，發現珠寶的絢爛光輝！​​​\n\n▼ 點擊下方按鈕，遨遊奇幻冬日秘境！'
                },
                {
                    type: 'flex',
                    altText:
                        'Harry Winston的祝福已送達\n─────────\n誠摯邀請您進入Winston’s Winter Wonderland，發現珠寶的絢爛光輝！\n\n▼ 點擊下方按鈕，遨遊奇幻冬日秘境！',
                    contents: {
                        type: 'bubble',
                        size: 'deca',
                        hero: {
                            type: 'image',
                            url: image,
                            size: 'full',
                            aspectRatio: '360:719.08',
                            aspectMode: 'cover',
                            action: {
                                type: 'uri',
                                uri: `${SHARE_URL}`
                            }
                        }
                    }
                },
                {
                    type: 'flex',
                    altText: 'Harry Winston的祝福已送達',
                    contents: {
                        type: 'bubble',
                        size: 'deca',
                        hero: {
                            type: 'image',
                            url: IMAGES.START_BTN,
                            aspectRatio: '358:83',
                            aspectMode: 'cover',
                            size: 'full',
                            action: {
                                type: 'uri',
                                uri: `${SHARE_URL}`
                            }
                        }
                    }
                }
            ],
            {
                isMultiple: true
            }
        );
    } catch (err) {
        console.log('err:', err);
    }
};

export default liffShareTargetPicker;
