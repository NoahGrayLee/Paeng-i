import React from "react"
import key from "weak-key"

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length}</strong>items
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => (
              <th key={key(el)} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => (
                <td key={key(el)}>{el[1]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

export default Table
