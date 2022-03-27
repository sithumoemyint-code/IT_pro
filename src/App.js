import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import {Navbar, Home, About, Detail, Course_map} from './components'
import { Join } from './components/Home'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Navbar />
      <Join showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
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
      </AnimatePresence>
    </div>
  )
}

export default App
