import Nav from '../components/nav'
import Link from 'next/link'
import getEnterprises from '../src/enterprise/repository'

const data = [
  { id: 1, name: 'test', substance: 'H2O' },
]

//Enterprises.getInitialProps = async ({ req }) => {
  //getEnterprises(data);
//}

const Enterprises = () => (
  <div>
    <Nav />
    <Link align="center" href="add/enterprise">add enterprise</Link>
    <table align="center">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Date</th>
        <th>Substance</th>
        <th />
      </tr>
      {data.map(({ id, name, date, substance }) => (
        <tr>
          <th>{id}</th>
          <th>{name}</th>
          <th>{date}</th>
          <th>{substance}</th>
          <th>
            <Link>view</Link><br/>
            <Link href={`/edit/enterprise?id=${id}`}>edit</Link><br/>
            <Link>delete</Link><br/>
            <a onClick={getEnterprises(data)}>sas</a>
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
