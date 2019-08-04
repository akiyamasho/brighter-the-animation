import enMessages from "./en.json";
import jaMessages from "./ja.json";

export const LOCALE_STORAGE_KEY = "REMEMBER_LOCALE";

export const LOCALE_JA = "ja";
export const LOCALE_EN = "en";
export const DEFAULT_LOCALE = LOCALE_EN;

export const messages = {
    [LOCALE_EN]: enMessages,
    [LOCALE_JA]: jaMessages,
};

/*
export const languagesList = {
    [LOCALE_EN]: "English",
    [LOCALE_JA]: "日本語",
};
*/

// TODO: return to checking with JA when translations are finalised
export const getBrowserLocale = () => DEFAULT_LOCALE;

export const saveBrowserLocale = locale => {
    if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
};
