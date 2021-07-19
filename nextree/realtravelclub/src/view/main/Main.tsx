import React, { Component } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import MenuItem from './sub-comp/MenuItem';
import '../main/Main.css';
interface Props extends RouteComponentProps {}

class Main extends Component {
	//

	render() {
		//
		const menuList = ['main', 'club', 'member'];

		return (
			<>
				<nav className="navtop">
					<h2>
						<NavLink exact to="/">
							TravelClub
						</NavLink>
					</h2>
					{menuList.map((menu) => (
						<MenuItem key={menu}>
							<NavLink exact to={`/${menu}`}>{menu}</NavLink>
						</MenuItem>
					))}
				</nav>
			</>
		);
	}
}

export default Main;
