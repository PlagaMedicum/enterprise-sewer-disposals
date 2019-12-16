import Nav from '../components/nav'
import Link from 'next/link'

const data = [
  { id: 1 },
]

const Discharges = () => (
  <div>
    <Nav />
    <div align="center">
      <Link align="center" href="add/discharge">add discharge</Link>
    </div>
    <table align="center">
      <tr>
        <th>Enterprise ID</th>
        <th>Enterprise name</th>
        <th>Discharge ID</th>
        <th>Discharge name</th>
        <th/>
      </tr>
      {data.map(({ id }) => (
        <tr>
          <th>{id}</th>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
          <th>
            <Link href={`/view/discharge?id=${id}`}>view</Link><br/>
            <Link href={`/edit/discharge?id=${id}`}>edit</Link><br/>
            <Link>delete</Link><br/>
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

export default Discharges
