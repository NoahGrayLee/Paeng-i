import React from 'react'

// 1. Dependencies
// 2. Components
import { Link } from 'react-router-dom'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const QuickMenuItem = props => {
  const { title, path, children } = props
  return (
    <StyledQuickMenuItem>
      <Link to={path} className="FRL">
        <div className="icon FRC">{children}</div>
        <div className="title">{title}</div>
      </Link>
    </StyledQuickMenuItem>
  )
}

const StyledQuickMenuItem = styled.div`
  padding: 8px 12px 8px 2px;
  border: 1px solid var(--gray4);
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 4px;
  transition: 0.2s;
  &:hover {
    color: var(--primary);
    border-color: var(--primary);
    font-weight: bold;
  }
  & .icon {
    width: 40px;
  }
  & .title {
  }
`

export default QuickMenuItem
