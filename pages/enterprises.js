import Nav from '../components/nav'
import Link from 'next/link'

const data = [
  { id: 1, name: 'test', substance: 'H2O' },
]

const Enterprises = () => (
  <div>
    <Nav />
    <table align="center">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Substance</th>
        <th />
      </tr>
      {data.map(({ id, name, substance }) => (
        <tr>
          <th>{id}</th>
          <th>{name}</th>
          <th>{substance}</th>
          <th>
            <Link>view</Link><br/>
            <Link href={`/edit/enterprise?id=${id}`}>edit</Link><br/>
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

export default Enterprises
