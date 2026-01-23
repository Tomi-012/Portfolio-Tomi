import { ref, watch } from 'vue';
import translations from '../locales/translations.js';

const defaultLocale = 'en';
const savedLocale = localStorage.getItem('user-locale');
const locale = ref(savedLocale && translations[savedLocale] ? savedLocale : defaultLocale);

watch(locale, (newLocale) => {
    localStorage.setItem('user-locale', newLocale);
});

export function useI18n() {
    const t = (key) => {
        // Access locale.value to ensure reactivity dependency
        const currentLocale = locale.value;
        const keys = key.split('.');
        let value = translations[currentLocale];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value;
    };

    const setLocale = (newLocale) => {
        if (translations[newLocale]) {
            locale.value = newLocale;
        }
    };

    return {
        locale,
        setLocale,
        t
    };
}
