import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/create' activeStyle>
						Create
					</NavLink>
					<NavLink to='/filters' activeStyle>
						Filters
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar