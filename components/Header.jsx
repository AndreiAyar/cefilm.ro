import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`
  width: auto;
  height: 60px;
  background-color: var(--oxford-blue);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
  .search-container {
    width: 500px;
    input {
      padding: 10px;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      border: none;
      outline: none;
    }
    input:focus {
      padding: 7px;
      border: solid 3px rgba(var(--orange-web));
    }
  }
`;

const NavigationContainer = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  a {
    display: inline-block;
    color: rgba(var(--platinum));
    font-size: 18px;
    font-weight: 500;
    width: 100px;
    text-align: center;
    padding: 8px;
    :hover {
      border-radius: 3px;
      background-color: rgba(var(--platinum), 0.1);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">Logo</div>
      <div className="search-container">
        <input placeholder="Cauta pe ceFilm.ro" type="text"></input>
      </div>
      <NavigationContainer>
        <nav>
          <ul>
            <li>
              <a href="#">First</a>
            </li>
            <li>
              <a href="#">Second</a>
            </li>
            <li>
              <a href="#">Third</a>
            </li>
          </ul>
        </nav>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
