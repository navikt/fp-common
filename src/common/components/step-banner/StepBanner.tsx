import React from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemUtils';
import Banner from '../banner/Banner';

import './stepBanner.less';

interface StepBannerProps {
    text: string;
    tag?: 'h1' | 'h2' | 'h3';
}

const bem = bemHelper('stepBanner');
const StepBanner: React.FunctionComponent<StepBannerProps> = ({ text, tag = 'h2' }) => (
    <Banner size="small" className={bem.block}>
        <Undertittel tag={tag}>{text}</Undertittel>
    </Banner>
);

export default StepBanner;