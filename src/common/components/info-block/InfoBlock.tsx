import bemUtils from './../../utils/bemUtils';
import React, { FunctionComponent } from 'react';

interface InfoBlockProps {
    children: React.ReactNode;
}

const InfoBlock: FunctionComponent<InfoBlockProps> = ({ children }) => {
    const bem = bemUtils('infoBlock');

    return <div className={bem.block}>{children}</div>;
};

export default InfoBlock;
