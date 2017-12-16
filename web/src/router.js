import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from 'containers/Landing'
import Shelf from 'containers/Shelf'
import Header from 'components/Header'

const RootRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path='/' component={Landing} />
      <Route exact path='/shelf/:shelf' component={Shelf} />
      <Route exact path='/shelf/:shelf/:bin' component={Shelf} />
    </div>
  </BrowserRouter>
)

export default RootRouter
