import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import {
  Home,
  Notifications,
  Schedules,
  MeetingNotes,
  Documents,
  Attendance,
  Accounting,
  Coworkers
} from "./screens"
import { Header, Sidebar } from "./components/layout"
import styled from "styled-components"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="layout FRL">
          <Sidebar />
          <ContentsSpace>
            <Route exact path="/" component={Home} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/schedules" component={Schedules} />
            <Route exact path="/meeting-notes" component={MeetingNotes} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/attendance" component={Attendance} />
            <Route exact path="/accounting" component={Accounting} />
            <Route exact path="/coworkers" component={Coworkers} />
          </ContentsSpace>
        </div>
      </div>
    </Router>
  )
}

const ContentsSpace = styled.div`
  width: 100%;
  padding: 0 1rem;
`

const wrapper = document.getElementById("app")

wrapper ? ReactDOM.render(<App />, wrapper) : null
