import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Chevron from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import bemUtils from '../../utils/bemUtils';

import './backLink.less';

interface BackLinkProps {
    className?: string;
    href: string;
    ariaLabel?: string;
    onClick?: (href: string, event: React.SyntheticEvent) => void;
}

const BackLink: React.FunctionComponent<BackLinkProps> = ({ className, href, onClick, ariaLabel }) => {
    const navigate = useNavigate();
    const bem = bemUtils('backLink');

    const handleOnClick = (event: React.SyntheticEvent) => {
        if (onClick) {
            onClick(href, event);
        } else {
            event.preventDefault();
            navigate(href);
        }
    };

    return (
        <div className={`${bem.block} ${className}`} onClick={handleOnClick}>
            <Chevron className={bem.element('chevron')} type="venstre" />
            <Lenke className={bem.element('link')} href={href} ariaLabel={ariaLabel}>
                <FormattedMessage id="backlink.label" />
            </Lenke>
        </div>
    );
};

export default BackLink;
