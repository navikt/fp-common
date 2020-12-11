const commonMessagesNb = require('common/i18n/common.nb.json');
const commonMessagesNn = require('common/i18n/common.nn.json');

const bokmålstekster = {
    ...commonMessagesNb,
};
const nynorsktekster = {
    ...commonMessagesNn,
};

export const appMessages = {
    nb: bokmålstekster,
    nn: nynorsktekster,
};
