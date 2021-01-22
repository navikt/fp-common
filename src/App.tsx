import LanguageToggle from 'common/components/language-toggle/LanguageToggle';
import Sidebanner from 'common/components/sidebanner/Sidebanner';
import AppIntlProvider from 'dev/components/app-intl-provider/AppIntlProvider';
import React from 'react';

const App = () => {
    return (
        <AppIntlProvider locale={'nb'}>
            <LanguageToggle availableLocales={['nb', 'nn']} locale="nb" toggle={() => undefined} />
            <Sidebanner dialog={{ text: 'Bla bla bla', title: 'Velkommen' }}></Sidebanner>
        </AppIntlProvider>
    );
};

export default App;
