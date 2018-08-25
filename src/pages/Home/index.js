import React from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'

const Home = () => (
  <section className='FCC'>
    <h1>Paeng-i Home</h1>
    <Link to='/'>Paeng-i Home</Link>
    <Link to='/chapter37'>Chapter37 - Apocalypse</Link>
  </section>
)

export default Home
