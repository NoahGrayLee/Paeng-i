import React from 'react'

// 1. Dependencies
import { Link } from 'react-router-dom'
// 2. Components
// 3. for style
import styled from 'styled-components'
import { ChevronDown } from 'react-feather'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const Header = () => {
  return (
    <StyledHeader className="FRSB">
      <div className="left-side FRL">
        <Link className="site-title" to="/">
          팽이
        </Link>
        <div className="short-cuts FRL">
          <div className="short-cut-item">출석부</div>
          <div className="short-cut-item">팽이교재</div>
          <div className="short-cut-item">목자팀</div>
          <div className="short-cut-item">교육팀</div>
        </div>
      </div>
      <div className="right-side FRR">
        <div className="user-name FRR">
          오이현
          <ChevronDown color="gray" />
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  padding: 0 2rem 0 24px;
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid var(--gray1);
  & .left-side {
    & .site-title {
      width: 200px;
      font-size: 16px;
      font-weight: bold;
    }
    & .short-cuts {
      & .short-cut-item {
        padding: 0 2rem;
      }
    }
  }
`

export default Header
