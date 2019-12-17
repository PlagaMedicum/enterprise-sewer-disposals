import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const deleteDischarge = (id) => {
  axios.delete(`http://localhost:3100/discharge/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}

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
        {data.map(({ e_id, e_name, d_id, d_name }) => (
          <tr>
            <th>{e_id}</th>
            <th>{e_name}</th>
            <th>{d_id}</th>
            <th>{d_name}</th>
            <th>
              <Link href={`/view/discharge?id=${d_id}`}>view</Link><br/>
              <Link href={`/edit/discharge?id=${d_id}`}>edit</Link><br/>
              <a onClick={() => deleteDischarge(d_id)}>delete</a><br/>
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
      a {
        cursor:pointer;
        color:blue;
        text-decoration:underline;
      }
    `}</style>
  </div>
)

Discharges.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/discharge`)
    .then(res => {
      if (res.data != null) {
        data = res.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Discharges
