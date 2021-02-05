import React from 'react';
import { Element } from 'nav-frontend-typografi';
import bemUtils from './../../utils/bemUtils';
import StatusIkon, { StatusKey } from 'common/assets/status-ikon/StatusIkon';

interface Props {
    image: React.ReactNode;
    status: StatusKey;
    statusText: string;
    description: string;
}

const bem = bemUtils('pictureScanningGuide').child('example');

const PictureScanningExample: React.FunctionComponent<Props> = ({ image, status, statusText, description }) => (
    <div className={bem.block}>
        <div className={bem.element('image')}>{image}</div>
        <Element tag="div" className={bem.element('title')}>
            <span className={bem.element('statusIcon')} role="presentation">
                <StatusIkon status={status} />
            </span>
            {statusText}
        </Element>
        <div className={bem.element('description')}>{description}</div>
    </div>
);

export default PictureScanningExample;
