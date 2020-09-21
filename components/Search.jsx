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
  height: auto;
  margin-top: 5px;
  background-color: rgba(var(--platinum));
  ul {
    padding: 0;
    margin: 5px;
  }
  img {
    width: 60px;
  }
  a {
    display: flex;
  }
  .info_container {
    margin: 5px;
  }
  .overview {
    white-space: pre;
    width: 400px;

    overflow: hidden;
    text-overflow: ellipsis;
  }
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

      {searchValue  && search && search.results && searchValue.replace(/\s/g, '').length > 0  && (
        <Dropdown>
          <ul>
            {search.results.slice(0, 10).map(
              ({ title, poster_path, overview }, index) =>
                poster_path !== null && (
                  <li key={index}>
                    <a href="#">
                      <div className="poster">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        />
                      </div>
                      <div className="info_container">
                        <div className="title">{title}</div>
                        <div className="overview">{overview}</div>
                      </div>
                    </a>
                  </li>
                )
            )}
          </ul>
        </Dropdown>
      )}
    </SearchContainer>
  );
};

export default Search;
