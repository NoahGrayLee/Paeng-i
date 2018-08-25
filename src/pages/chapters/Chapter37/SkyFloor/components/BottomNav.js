import React from 'react'

// Dependencies
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BottomNav = () => (
  <StyledNav className='FRSB'>
    <Link to=''>0. Home</Link>
    <Link to='/title'>1. Title</Link>
    <Link to='/bible'>2. Today&#39; Bible</Link>
    <Link to='/bg-story'>3. Background Story</Link>
    <Link to='/select-church'>4. Select Church</Link>
    <Link to='/introduce-church'>5. Introduce Church</Link>
    <Link to='/find-location'>6. Find Location</Link>
    <Link to='/read-messages'>7. Messages from John</Link>
    <Link to='/puzzle'>8. Puzzle</Link>
    <Link to='/answer'>9. Answer</Link>
    <Link to='/closing'>10. Closing</Link>
    <Link to='/conversation'>11. Conversation</Link>
  </StyledNav>
)

const StyledNav = styled.div`
  width: 100vw;
  height: 2rem;
  position: absolute;
  bottom: 0;
  padding: 0 2rem;
  color: gray;
`

export default BottomNav
