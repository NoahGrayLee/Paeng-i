import React from 'react'

// 1. Dependencies
import { NavLink } from 'react-router-dom'

// 2. Components
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    margin: 0,
    boxSizing: 'border-box',
    boxShadow: 'none',
    '&:before': {
      display: 'none'
    },
    '& [aria-expanded=true]': {
      height: '48px',
      minHeight: '48px'
    }
  },
  summary: {
    margin: 0,
    right: '-4px',
    paddingLeft: '20px',
    paddingRight: '16px'
  },
  sectionTitle: {
    fontWeight: 'bold'
  },
  activeNav: {
    color: 'var(--primary)'
  },
  details: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingRight: 0,
    paddingBottom: 0
  }
})

const ExpansionSidebarMenu = props => {
  const { sectionTitle, path, children, classes } = props

  return (
    <ExpansionPanel className={classes.root} key={sectionTitle}>
      <ExpansionPanelSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
      >
        <NavLink
          to={path}
          className={classes.sectionTitle}
          activeClassName={classes.activeNav}
        >
          {sectionTitle}
        </NavLink>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

const StyledExpansionSidebarMenu = styled.div``

export default withStyles(styles)(ExpansionSidebarMenu)
