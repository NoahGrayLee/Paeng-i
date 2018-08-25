import React from 'react'

// Dependencies
import styled from 'styled-components'

// Components
import BottomNav from './BottomNav'

const ProjectionLayout = (props) => (
  <StyledContainer className='FCC'>
    <Location className='FRL'>{props.title}</Location>
    {props.children}
    <BottomNav />
  </StyledContainer>
)

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  & p {
    font-size: 1.4rem;
  }
`

const Location = styled.div`
  width: 100vw;
  height: 2rem;
  position: fixed;
  top: 0;
  color: gray;
`

export default ProjectionLayout
