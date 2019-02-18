import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import appStore from './store/appStore';
import { Provider } from 'mobx-react';

import Layout from './components/common/Layout';


ReactDOM.render(
    <Provider appStore={appStore}>
        <Router >
            <Layout/>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);