import React from 'react';
import styled from 'styled-components';
import menuData from '../../services/menu.json'; 

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
    width: 146px;
    margin: 15px;
    text-align: center;
  }
  
  a {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;
    text-decoration: none;
    color: #353535;
  }

  li:first-child a:first-of-type {
    font-weight: 700;
    color: #FAA500;
  }
  li:first-child :before{
    content: url(./assets/icons/icon-dress.svg);
    position: relative;
    right: 12px;
    top: 3px;
  }
`;

const Menu = () => {
  return (
    <Nav>
      <div style={{ maxWidth: '1598px', width: '100%', margin: '0 auto' }}>
        <ul>
          {menuData.map((item, index) => (
            <li key={item.TextMenu}>
              <a href={item.url}>{item.TextMenu}</a>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};

export default Menu;
