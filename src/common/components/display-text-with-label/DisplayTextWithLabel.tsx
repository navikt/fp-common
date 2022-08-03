import * as React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import './displayTextWithLabel.less';

interface Props {
    label: string;
    text: string | string[];
}

const DisplayTextWithLabel: React.FunctionComponent<Props> = (props) => (
    <div className="textWithLabel">
        {props.label && <Element className="textWithLabel__label">{props.label}</Element>}
        {Array.isArray(props.text) &&
            props.text.map((textElement, index) => (
                <Normaltekst key={`${textElement}-${index}`} className="textWithLabel__text">
                    {textElement}
                </Normaltekst>
            ))}
        {!Array.isArray(props.text) && <Normaltekst className="textWithLabel__text">{props.text}</Normaltekst>}
    </div>
);
export default DisplayTextWithLabel;
