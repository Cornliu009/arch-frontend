import { localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';

// Install English locales.
export const localizeValidations = () => {
    localize({
        en: {
            messages: {
                ...en.messages,
            },
        },
    });
};
