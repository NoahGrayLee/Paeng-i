import React, { useState } from "react"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = event => {
    if (event.target.name === "name") {
      setName(event.target.value)
    }
    if (event.target.name === "email") {
      setEmail(event.target.value)
    }
    if (event.target.name === "message") {
      setMessage(event.target.value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const lead = { name, email, message }
    const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-type": "application/json" })
    }
    fetch("api/lead/", conf).then(response =>
      console.log("form response: ", response)
    )
  }

  return (
    <div>
      Form
      <form onSubmit={e => handleSubmit(e)}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={e => handleChange(e)}
              value={name}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              onChange={e => handleChange(e)}
              value={email}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              type="text"
              name="message"
              onChange={e => handleChange(e)}
              value={message}
              required
            />
          </div>
        </div>
        <div className="control">
          <button type="submit" className="button is-info">
            Send message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
