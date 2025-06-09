import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Home from '../Home/Home'

const Root = () => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Layout/>}>
        <Route path='/' element = {<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Root
