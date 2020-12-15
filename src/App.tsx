import LanguageToggle from 'common/components/language-toggle/LanguageToggle';
import AppIntlProvider from 'dev/components/app-intl-provider/AppIntlProvider';
import React from 'react';

const App = () => {
    return (
        <AppIntlProvider locale={'nb'}>
            <LanguageToggle availableLocales={['nb', 'nn']} locale="nb" toggle={() => undefined} />
        </AppIntlProvider>
    );
};

export default App;
