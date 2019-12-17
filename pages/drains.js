import Nav from '../components/nav'
import Link from 'next/link'

const Drains = ({ data }) => (
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

Enterprises.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/drain`)
    .then(resp => {
      if (resp.data != null) {
        data = resp.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Drains
