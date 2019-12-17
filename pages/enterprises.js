import React from 'react'
import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const Enterprises = ({ data }) => {
    return(
      <div>
        <Nav />
        <div align="center">
          <Link href="add/enterprise">add enterprise</Link>
        </div>
        <table align="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Substance</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, date, substance }) => (
              <tr>
                <th>{id}</th>
                <th>{name}</th>
                <th>{date}</th>
                <th>{substance}</th>
                <th>
                  <Link href={`/view/enterprise?id=${id}`}>view</Link><br/>
                  <Link href={`/edit/enterprise?id=${id}`}>edit</Link><br/>
                  <Link>delete</Link><br/>
                  <a onClick={() => this.updateTable()}>sas</a>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          table {
            border-collapse: collapse;
          }
          th, td {
            padding: 10px;
            text-align: center;
          }
          tr:nth-child(even) {
            background-color: #eee;
          }
          tr:nth-child(odd) {
            background-color: #fff;
          }
        `}</style>
      </div>
    )
  }

Enterprises.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/enterprise`)
    .then(resp => {
      if (resp.data != null) {
        data = resp.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Enterprises
