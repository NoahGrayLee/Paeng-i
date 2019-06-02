import React, { useEffect } from 'react'

// 1. Dependencies
import { NavLink } from 'react-router-dom'

// 2. Components
import ExpansionSidebarMenu from './ExpansionSidebarMenu'

// 3. for style
import styled from 'styled-components'
import MenuList from './menu-list.json'
import { getThemeProps } from '@material-ui/styles'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const Sidebar = () => {
  return (
    <StyledSidebar className="FCL">
      {MenuList.map(item => {
        if (item.subMenus) {
          const { sectionTitle, path, subMenus } = item
          return (
            <ExpansionSidebarMenu sectionTitle={sectionTitle} path={path}>
              <div className="sub-menus-container FCL">
                {subMenus.map(subMenu => {
                  const { menuTitle, path } = subMenu
                  return (
                    <NavLink
                      to={path}
                      className="menu-title"
                      activeClassName="active-nav"
                    >
                      - {menuTitle}
                    </NavLink>
                  )
                })}
              </div>
            </ExpansionSidebarMenu>
          )
        }
        if (!item.subMenus) {
          return (
            <div className="FCL menu-section-container">
              <NavLink
                to={item.path}
                className="menu-section-title FRL"
                activeClassName="active-nav"
              >
                {item.sectionTitle}
              </NavLink>
            </div>
          )
        }
      })}
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  width: 260px;
  height: 100vh;
  background-color: var(--gray1);
  overflow-y: scroll;
  padding-bottom: 5rem;
  & .sub-menus-container {
    padding-left: 0.6rem;
    & .menu-title {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 0.4rem;
    }
  }
  & .menu-section-container {
    padding: 0 24px;
    & .menu-section-title {
      width: 100%;
      height: 48px;
      font-weight: bold;
    }

    & .active-nav {
      color: var(--primary);
    }
  }
`

export default Sidebar
