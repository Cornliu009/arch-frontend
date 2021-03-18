import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/i18n/messages';
import getBrowserLocales from '@/helpers/getBrowserLocales';

Vue.use(VueI18n);

let locale: string | null = window.localStorage.getItem('locale');

if (null === locale) {
    const supportedLocales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE as unknown as Array<string>;

    locale = getBrowserLocales()
        .filter((l) => supportedLocales.includes(l))[0] || process.env.VUE_APP_I18N_LOCALE || 'en';

    if (null !== locale) {
        localStorage.setItem('locale', locale);
    }
}

const i18n = new VueI18n({
    locale: locale as string,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages,
});

export default i18n;
