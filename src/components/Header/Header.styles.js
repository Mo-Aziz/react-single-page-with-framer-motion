import styled from "styled-components";
import {Link} from "react-router-dom";

export const Navbar = styled.nav`
height: 60px;
background: transparent;
padding: 0rem calc((100vw - 1300px) / 2);
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled(Link)`
color:#fff;
padding:1rem;
text-decoration: none;
font-size:1.5rem;
font-weight: bold;
font-style:italic;
`;

export const NavItems = styled.div``;

export const NavbarLink = styled(Link)`
color:#fff;
text-decoration: none;
padding: 1rem;
`;
