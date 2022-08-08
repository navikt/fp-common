import { LanguageToggle, Sidebanner, SlettKnapp } from 'common';
import AppIntlProvider from 'dev/components/app-intl-provider/AppIntlProvider';
import React from 'react';

const App = () => {
    return (
        <AppIntlProvider locale={'nb'}>
            <LanguageToggle availableLocales={['nb', 'nn']} locale="nb" toggle={() => undefined} />
            <Sidebanner dialog={{ text: 'Bla bla bla', title: 'Velkommen' }}></Sidebanner>
            <SlettKnapp ariaLabel="et" onClick={() => null}>
                Tt
            </SlettKnapp>
        </AppIntlProvider>
    );
};

export default App;
