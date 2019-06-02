import React from 'react'

// 1. Dependencies
// 2. Components
import { Link } from 'react-router-dom'
import { ChevronRight } from 'react-feather'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const HomeSectionTitle = props => {
  const { title, path } = props

  return (
    <StyledHomeSectionTitle>
      <Link className="section-title-container FRSB" to={path}>
        <div className="section-title">{title}</div>
        <ChevronRight size={16} />
      </Link>
    </StyledHomeSectionTitle>
  )
}

const StyledHomeSectionTitle = styled.div`
  margin-bottom: 12px;
  & .section-title {
    font-weight: bold;
  }
  & .section-title-container:hover {
    color: var(--primary);
  }
`

export default HomeSectionTitle
