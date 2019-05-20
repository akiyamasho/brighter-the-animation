import {
    getBrowserLocale,
    LOCALE_EN,
    LOCALE_JA,
    saveBrowserLocale,
} from "./index";
import { TOGGLE_LOCALE } from "./actions";

const reducer = (state = getBrowserLocale(), { type }) => {
    switch (type) {
        case TOGGLE_LOCALE:
            // eslint-disable-next-line no-case-declarations
            const newLocale = state === LOCALE_EN ? LOCALE_JA : LOCALE_EN;
            saveBrowserLocale(newLocale);
            return newLocale;
        default:
            return getBrowserLocale();
    }
};

export default reducer;
