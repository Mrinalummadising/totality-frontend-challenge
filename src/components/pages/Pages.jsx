import React from "react"
import Header from "../common/header/Header"
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </> 
  )
}

export default Pages
