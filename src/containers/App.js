import React from 'react';
/* import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';

const App = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route component={PageNotFound} />
			</Switch>
		</Layout>
	</Router>
);

export default App;