import React, { useState, lazy, Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Join } from './components/Home'
import { AnimatePresence } from 'framer-motion'
import Navbar from "./components/Navbar/Navbar"
// import {Navbar, Home, About, Detail, Course_map} from './components'

const Home = lazy(() => import("./components/Home/Home"))
const About = lazy(() => import("./components/About/About"))
const Detail = lazy(() => import("./components/Home/Category/Detail"))
const Course_map = lazy(() => import("./components/Course_map/Course_map"))

function App() {
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Navbar />
      <Join showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch location={location} key={location.key}>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/detail/:id'>
              <Detail setShowModal={setShowModal} />
            </Route>
            <Route path='/course_map'>
              <Course_map />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </div>
  )
}

export default App
