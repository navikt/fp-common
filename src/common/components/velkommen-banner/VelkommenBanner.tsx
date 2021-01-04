import bemUtils from '../../utils/bemUtils';
import React from 'react';
import SpeechBubble from '../speech-bubble/SpeechBubble';

import Veileder, { VeilederProps } from '../veileder/Veileder';

import './velkommenBanner.less';

interface Props {
    dialog?: Dialog;
    veileder?: VeilederProps;
}

interface Dialog {
    title: string;
    text: string | React.ReactNode;
}

const VelkommenBanner: React.FunctionComponent<Props> = ({ dialog, veileder }) => {
    const bem = bemUtils('velkommenBanner');
    return (
        <div className={bem.block}>
            {dialog && (
                <div className={bem.element('speechbubble')}>
                    <SpeechBubble title={dialog.title} text={dialog.text} />
                </div>
            )}
            <Veileder {...veileder} />
        </div>
    );
};

export default VelkommenBanner;
