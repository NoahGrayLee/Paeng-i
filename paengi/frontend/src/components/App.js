import React from "react"
import ReactDOM from "react-dom"
import DataProvider from "./DataProvider"
import Form from "./Form"

const App = () => (
  <React.Fragment>
    <DataProvider />
    <Form />
  </React.Fragment>
)

const wrapper = document.getElementById("app")

wrapper ? ReactDOM.render(<App />, wrapper) : null
