import React from 'react';
import { useIntl } from 'react-intl';
import classnames from 'classnames';
import { Knapp } from 'nav-frontend-knapper';
import Modal, { ModalProps } from 'nav-frontend-modal';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import bemUtils from '../../../utils/bemUtils';
import intlHelper from '../../../utils/intlUtils';
import Knapperad from '../../knapperad/Knapperad';

import './bekreftDialog.less';

export interface Props extends ModalProps {
    tittel?: string;
    onBekreft: () => void;
    onAvbryt?: () => void;
    bekreftLabel?: string;
    avbrytLabel?: string;
    størrelse?: '30';
}
const bem = bemUtils('bekreftDialog');
const BekreftDialog: React.FunctionComponent<Props> = (props) => {
    const intl = useIntl();
    const { tittel, onAvbryt, onBekreft, avbrytLabel, bekreftLabel, children, størrelse, ...modalProps } = props;
    return (
        <Modal
            {...modalProps}
            className={classnames(bem.block, størrelse ? bem.modifier(`size-${størrelse}`) : undefined)}
        >
            {props.isOpen && (
                <Normaltekst tag="div">
                    {tittel && <Systemtittel className="blokk-s">{tittel}</Systemtittel>}
                    <div className="blokk-m">{children}</div>
                    <Knapperad>
                        <Knapp type="hoved" onClick={() => onBekreft()} className="bekreftDialog__bekreftKnapp">
                            {bekreftLabel || intlHelper(intl, 'komponent.bekreftDialog.bekreftLabel')}
                        </Knapp>
                        <Knapp
                            type="flat"
                            onClick={() => (onAvbryt ? onAvbryt() : props.onRequestClose())}
                            className="bekreftDialog__avbrytKnapp"
                        >
                            {avbrytLabel || intlHelper(intl, 'komponent.bekreftDialog.avbrytLabel')}
                        </Knapp>
                    </Knapperad>
                </Normaltekst>
            )}
        </Modal>
    );
};
export default BekreftDialog;
