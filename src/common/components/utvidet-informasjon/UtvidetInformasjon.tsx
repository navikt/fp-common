import React, { useState } from 'react';
import { guid } from 'nav-frontend-js-utils';
import InfoToggler from './InfoToggler';
import EkspanderbartInnhold from './EkspanderbartInnhold';
import { Normaltekst } from 'nav-frontend-typografi';
import { useIntl } from 'react-intl';
import intlHelper from './../../utils/intlUtils';

import './utvidetInformasjon.less';

interface Props {
    children: React.ReactNode;
    erApen?: boolean;
    apneLabel?: React.ReactNode;
    lukkLabel?: React.ReactNode;
}

const UtvidetInformasjon: React.FunctionComponent<Props> = ({ children, erApen, apneLabel }) => {
    const intl = useIntl();
    const innholdId = guid();
    const [apen, setApen] = useState<boolean>(erApen || false);
    const lukkLabel = intlHelper(intl, 'utvidetInformasjon.lukkTekst');

    return (
        <div className="utvidetInformasjon">
            <div className="utvidetInformasjon__toggler no-print">
                <InfoToggler onToggle={() => setApen(!apen)} apen={apen}>
                    <Normaltekst tag="span">{apen ? lukkLabel : apneLabel}</Normaltekst>
                </InfoToggler>
            </div>
            <div className="utvidetInformasjon__innhold" id={innholdId}>
                <EkspanderbartInnhold erApen={apen}>{children}</EkspanderbartInnhold>

                <div className="print-only">{children}</div>
            </div>
        </div>
    );
};
export default UtvidetInformasjon;
