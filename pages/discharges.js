import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const Discharges = ({ data }) => (
  <div>
    <Nav />
    <div align="center">
      <Link align="center" href="add/discharge">add discharge</Link>
    </div>
    <table align="center">
      <thead>
        <tr>
          <th>Enterprise ID</th>
          <th>Enterprise name</th>
          <th>Discharge ID</th>
          <th>Discharge name</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, d_id, d_name }) => (
          <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{d_id}</th>
            <th>{d_name}</th>
            <th>
              <Link href={`/view/discharge?id=${id}`}>view</Link><br/>
              <Link href={`/edit/discharge?id=${id}`}>edit</Link><br/>
              <Link>delete</Link><br/>
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

Discharges.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/discharge`)
    .then(resp => {
      if (resp.data != null) {
        data = resp.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Discharges
