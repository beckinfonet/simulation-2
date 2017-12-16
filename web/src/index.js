import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import RootRouter from './router'

ReactDOM.render(<RootRouter />, document.getElementById('root'));
registerServiceWorker();
