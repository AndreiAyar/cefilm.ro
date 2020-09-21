import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { fetchTrending } from '../redux/actions/actions';

import Header from '../components/Header'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrending());
  }, [])

  // const {value} = useSelector(state => state.value)
  const { movies } = useSelector(state => state)

  console.log(movies.results)
  return (
    <div className="container">
      {/* <div><p  >asdadasp</p> </div>
      <button onClick={() => dispatch(fetchTrending())}>Da click</button> */}
      <Header />
    </div>

  )
}