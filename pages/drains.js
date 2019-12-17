import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const Drains = ({ data }) => (
  <div>
    <Nav />
    <table align="center">
      <thead>
        <tr>
          <th>Drain ID</th>
          <th>Date</th>
          <th>Substance name</th>
          <th>Concentration limit</th>
          <th>Coeff. of nonconservativity</th>
          <th>Discharge ID</th>
          <th>Background concentration</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ drain_id, date, s_name, c_l, coefficient, dis_id, b_c }) => (
          <tr>
            <th>{drain_id}</th>
            <th>{date}</th>
            <th>{s_name}</th>
            <th>{c_l}</th>
            <th>{coefficient}</th>
            <th>{dis_id}</th>
            <th>{b_c}</th>
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
