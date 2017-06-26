import React from 'react';
import PropTypes from 'prop-types';

import Header from './partials/Header';

class Layout extends React.Component {
	render() {
		return (
			<div className="pageWrapper">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-xs-offset-1 col-xs-10">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node
};

Layout.defaultProps = {
	children: {}
};

export default Layout;