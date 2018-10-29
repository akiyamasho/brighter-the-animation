import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ja from "react-intl/locale-data/ja";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { DEFAULT_LOCALE, getBrowserLocale } from "./localisation";
import rootReducer from "./reducer";

import "./index.css";
import { messages } from "./localisation";

import "core-js";

const initialState = {
  locale: DEFAULT_LOCALE,
};
const initStore = createStore(rootReducer, initialState);

addLocaleData([...en, ...ja]);
const ConnectedIntlProvider = connect(({ locale }) => ({
  locale,
  messages: messages[locale],
}))(IntlProvider);

ReactDOM.render(
  <Provider store={initStore}>
    <ConnectedIntlProvider defaultLocale={getBrowserLocale()}>
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
