import React from 'react';

class Header extends React.Component {
	render() {

		return (
			<div className="header">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 text-center">
							<h1>DnD Sheet</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;