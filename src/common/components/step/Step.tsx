import React from 'react';
import { History } from 'history';
import { Systemtittel } from 'nav-frontend-typografi';
import bemUtils from './../../utils/bemUtils';
import Page from '../page/Page';
import StepIndicator, { StepIndicatorStep } from '../step-indicator/StepIndicator';
import StepBanner from '../step-banner/StepBanner';
import Block from '../block/Block';

import './step.less';
import BackLink from '../back-link/BackLink';
import StepFooter from '../step-footer/StepFooter';

interface Props {
    pageTitle: string;
    stepTitle: string;
    kompakt: boolean;
    bannerTitle?: string;
    backLinkHref?: string;
    steps: StepIndicatorStep[];
    activeStepId: string;
    previousStepTitle?: string;
    children: React.ReactNode;
    showStepIndicator?: boolean;
    topContentRenderer?: () => React.ReactElement<any>;
    onCancel?: () => void;
    onContinueLater?: () => void;
    cancelOrContinueLaterAriaLabel?: string;
    pageAriaLabel?: string;
}

const Step: React.FunctionComponent<Props> = ({
    bannerTitle,
    pageTitle,
    stepTitle,
    backLinkHref,
    steps,
    activeStepId,
    onCancel,
    onContinueLater,
    cancelOrContinueLaterAriaLabel,
    showStepIndicator = true,
    children,
    previousStepTitle,
    pageAriaLabel,
    kompakt,
}) => {
    const currentStepIndex = steps.findIndex((s) => s.id === activeStepId);
    const bem = bemUtils('step');

    return (
        <Page
            className={bem.block}
            title={pageTitle}
            ariaLabel={pageAriaLabel}
            topContentRenderer={() => (
                <>
                    {bannerTitle && (
                        <>
                            <StepBanner text={bannerTitle} />
                        </>
                    )}
                </>
            )}
        >
            {(showStepIndicator || backLinkHref) && (
                <>
                    {backLinkHref && (
                        <BackLink
                            href={backLinkHref}
                            ariaLabel={previousStepTitle}
                            className={bem.element('backLink')}
                            onClick={(nextHref: string, history: History, event: React.SyntheticEvent) => {
                                event.preventDefault();
                                history.push(nextHref);
                            }}
                        />
                    )}
                    <div role="presentation" aria-hidden={true}>
                        <StepIndicator kompakt={kompakt} steps={steps} activeStep={currentStepIndex} />
                    </div>
                </>
            )}
            <section aria-label={`Steg ${currentStepIndex + 1} av ${steps.length}:  ${pageTitle}`}>
                <Block margin="xxl">
                    <Systemtittel className={bem.element('title')} tag="h1">
                        {stepTitle}
                    </Systemtittel>
                </Block>

                <Block margin="xl">{children}</Block>

                {(onCancel || onContinueLater) && (
                    <div
                        role={cancelOrContinueLaterAriaLabel ? 'complementary' : undefined}
                        aria-label={cancelOrContinueLaterAriaLabel}
                    >
                        <StepFooter onAvbrytOgSlett={onCancel} onAvbrytOgFortsettSenere={onContinueLater} />
                    </div>
                )}
            </section>
        </Page>
    );
};

export default Step;
