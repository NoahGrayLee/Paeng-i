import React from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'

// Layout Components
import DoubleColumn from '../../../../components/layouts/DoubleColumn'

const SkyFloor = () => (
  <section>
    <DoubleColumn>
    {/*first column*/}
      <div className='FCC'>
        <h4>Chapter 37 Apocalypse</h4>
        <h1>SkyFloor</h1>
        <Link to='/chapter37'>Chapter 37 Home</Link>
        <Link to='/'>Paeng-i Home</Link>
        <Link to='/title'>START</Link>
      </div>
    {/*first column*/}
      <div className='FCC'>
        <h3>Screen List</h3>
        <ul className='FCC'>
          <Link to='/title'>Title</Link>
          <Link to='/bible'>Today&#39; Bible</Link>
          <Link to='/bg-story'>Background Story</Link>
          <Link to='/select-church'>Select Church</Link>
          <Link to='/introduce-church'>Introduce Church</Link>
          <Link to='/find-location'>Find Location</Link>
          <Link to='/read-messages'>Messages from John</Link>
          <Link to='/puzzle'>Puzzle</Link>
          <Link to='/answer'>Answer</Link>
          <Link to='/closing'>Closing</Link>
          <Link to='/conversation'>Conversation</Link>
        </ul>
      </div>
    </DoubleColumn>
  </section>
)

export default SkyFloor
