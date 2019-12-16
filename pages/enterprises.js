import React from 'react'
import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

class Enterprises extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      host: "localhost:3000/api",
      data: [
        { id: 1, name: 'test', substance: 'H2O' },
      ]
    }
  }

  updateTable(){
    axios.get(`${this.state.host}/enterprise`)
      .then(resp => {
        if (resp.data != null) {
          this.setState({ data: resp })
        }
      })
      .catch(err => console.log(err))
  }

  static async getInitialProps({ req }) {
    let data
    axios.get(`/api/enterprise`)
      .then(resp => {
        if (resp.data != null) {
          data = resp
        }
      })
      .catch(err => console.log(err))

    return { data }
  }

  render() {
    return(
      <div>
        <Nav />
        <div align="center">
          <Link href="add/enterprise">add enterprise</Link>
        </div>
        <table align="center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Substance</th>
            <th />
          </tr>
          {this.props.data.map(({ id, name, date, substance }) => (
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
}

export default Enterprises
