import { getBrowserLocale, LOCALE_EN, LOCALE_JA } from "./index";
import { TOGGLE_LOCALE } from "./actions";

const reducer = (state = getBrowserLocale(), { type }) => {
  switch (type) {
    case TOGGLE_LOCALE:
      return state === LOCALE_EN ? LOCALE_JA : LOCALE_EN;
    default:
      return state;
  }
};

export default reducer;
