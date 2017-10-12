import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import registerServiceWorker from "./registerServiceWorker";

import rootReducer from "./reducer";

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
