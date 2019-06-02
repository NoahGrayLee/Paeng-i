import React, { useState, useEffect } from "react"
import Table from "./Table"

const DataProvider = () => {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [placeholder, setPlaceholder] = useState("Loading")

  useEffect(() => {
    fetch("api/notification")
      .then(response => {
        if (response.status !== 200) {
          setPlaceholder("Something went wrong")
        }
        return response.json()
      })
      .then(data => setData(data), setLoaded(true))
  }, [])

  return loaded ? <Table data={data} /> : <p>{placeholder}</p>
}

export default DataProvider
