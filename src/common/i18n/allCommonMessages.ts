const commonMessagesNb = require('./common.nb.json');
const commonMessagesNn = require('./common.nn.json');
const commonMessagesEn = require('./common.en.json');

const bokmålstekster = {
    ...commonMessagesNb,
};
const nynorsktekster = {
    ...commonMessagesNn,
};

const engelsktekster = {
    ...commonMessagesEn,
};

const allCommonMessages = {
    nb: bokmålstekster,
    nn: nynorsktekster,
    en: engelsktekster,
};

export default allCommonMessages;
