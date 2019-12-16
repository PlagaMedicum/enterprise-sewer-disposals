import Nav from '../components/nav'
import Link from 'next/link'

const data = [
  { id: 1 },
  { id: 2 },
]

const Drains = () => (
  <div>
    <Nav />
    <div align="center">
      <Link align="center" href="add/drain">add drain</Link>
    </div>
    <table align="center">
      <tr>
        <th>Drain ID</th>
        <th>Substance</th>
        <th>Concentration limit</th>
        <th>Coeff. of nonconservativity</th>
        <th>Discharge ID</th>
        <th>Discharge name</th>
        <th>Background concentration</th>
        <th/>
      </tr>
      {data.map(({ id }) => (
        <tr>
          <th>{id}</th>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
          <th>
            <Link href={`/view/drain?id=${id}`}>view</Link><br/>
            <Link href={`/edit/drain?id=${id}`}>edit</Link><br/>
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

export default Drains
