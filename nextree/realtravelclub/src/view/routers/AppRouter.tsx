import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Main from '../main';
import Club from '../club';
import Member from '../member';

const routes = [
	// Common
	{
		path: 'club',
		component: Club,
	},
	{
		path: 'member',
		component: Member,
	},
];

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				{routes.map((singleRoute) => {
				
					const { path, ...otherProps } = singleRoute;
					return<Route key={path} exact path={`/${path}`} {...otherProps} />;
				})}
			</Switch>

		);
	}
}

export default AppRouter;
