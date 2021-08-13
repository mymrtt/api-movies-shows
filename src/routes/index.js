// Libs
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/movies' component={Movies} />
      <Route path='/shows' component={Shows} />
		</Switch>
	</BrowserRouter>
);

export default Routes;