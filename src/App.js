import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// console.log('Hello Worl')
export default class newsapp  extends Component {
  render() {
    return (
      <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" country="in"  category="general" pagesize="12"/>}/>
          <Route exact path="/business" element={<News key="business" country="in"  category="business" pagesize="12"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in"  category="entertainment" pagesize="12"/>}/>
          <Route exact path="/health" element={<News key="health" country="in"  category="health" pagesize="12"/>}/>
          <Route exact path="/science" element={<News key="science" country="in"  category="science" pagesize="12"/>}/>
          <Route exact path="/sports" element={<News key="sports" country="in"  category="sports" pagesize="12"/>}/>
          <Route exact path="/technology" element={<News key="technology" country="in"  category="technology" pagesize="12"/>}/>
        </Routes>
      </Router>
      
      </>
    )
  }
}
