import React from 'react';
import { Element } from 'nav-frontend-typografi';
import bemUtils from '../../utils/bemUtils';

import './speechBubble.less';

interface Props {
    title: string;
    text: string | React.ReactNode;
}

const SpeechBubble: React.FunctionComponent<Props> = ({ title = null, text }) => {
    const bem = bemUtils('speechBubble');

    return (
        <div className={`${bem.block} ${bem.modifier('white')}`}>
            <div className={bem.element('content')}>
                {title && (
                    <div className={`${bem.element('title')} capitalizeName`}>
                        <Element style={{ margin: '0' }}>{title}</Element>
                    </div>
                )}
                <div className={bem.element('text')}>{text}</div>
            </div>
        </div>
    );
};
export default SpeechBubble;
