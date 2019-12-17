import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const Drains = ({ data }) => (
  <div>
    <Nav />
    <div align="center">
      <Link align="center" href="add/drain">add drain</Link>
    </div>
    <table align="center">
      <thead>
        <tr>
          <th>Drain ID</th>
          <th>Substance</th>
          <th>Concentration limit</th>
          <th>Coeff. of nonconservativity</th>
          <th>Discharge ID</th>
          <th>Discharge name</th>
          <th>Background concentration</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id }) => (
          <tr>
            <th>{id}</th>
            <th>{}</th>
            <th>{}</th>
            <th>{}</th>
            <th>{}</th>
            <th>{}</th>
            <th>{}</th>
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

Drains.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/drain`)
    .then(res => {
      if (res.data != null) {
        data = res.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Drains
