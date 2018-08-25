import React from 'react'

// Dependencies
import styled from 'styled-components'

const DoubleColumn = (props) => (
  <section className='FRSB'>
    <LeftColumn className='FCC'>
      {props.children[0]}
    </LeftColumn>
    <RightColumn className='FCC'>
      {props.children[1]}
    </RightColumn>
  </section>
)

const LeftColumn = styled.div`
  width: calc(50% - 1rem);
`

const RightColumn = styled.div`
  width: calc(50% - 1rem);
`

export default DoubleColumn
