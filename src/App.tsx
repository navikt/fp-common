import LanguageToggle from 'common/components/language-toggle/LanguageToggle';
import VelkommenBanner from 'common/components/velkommen-banner/VelkommenBanner';
import AppIntlProvider from 'dev/components/app-intl-provider/AppIntlProvider';
import React from 'react';

const App = () => {
    return (
        <AppIntlProvider locale={'nb'}>
            <LanguageToggle availableLocales={['nb', 'nn']} locale="nb" toggle={() => undefined} />
            <VelkommenBanner dialog={{ text: 'Bla bla bla', title: 'Velkommen' }}></VelkommenBanner>
        </AppIntlProvider>
    );
};

export default App;
