import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { searchMovies } from "../redux/actions/actions";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 500px;
  position: relative;
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
`;

const Dropdown = styled.div`
  position: absolute;
  width: inherit;
  height: 400px;
  margin-top: 5px;
  background-color: rgba(var(--platinum));
`;

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { search } = useSelector((state) => state);
  useEffect(() => {
    dispatch(searchMovies(searchValue));
    console.log(search);
  }, [searchValue]);

  return (
    <SearchContainer>
      <input
        onChange={handleChange}
        placeholder="Cauta pe ceFilm.ro"
        value={searchValue}
        type="text"
      ></input>

      {searchValue && search && search.results && (
        <Dropdown>
          <ul>
            {search.results.slice(0, 10).map(({ title }, index) => (
              <li key={index}>{titel}</li>
            ))}
          </ul>
        </Dropdown>
      )}
    </SearchContainer>
  );
};

export default Search;
