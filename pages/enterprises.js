import Nav from '../components/nav'
import Link from 'next/link'
import axios from 'axios'

const deleteEnterprise = (id) => {
  axios.delete(`http://localhost:3100/enterprise/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}

const Enterprises = ({ data }) => {
    return(
      <div>
        <Nav />
        <div align="center">
          <Link href="add/enterprise">add enterprise</Link>
        </div>
        <table align="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Substance name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, date, s_name }) => (
              <tr>
                <th>{id}</th>
                <th>{name}</th>
                <th>{date}</th>
                <th>{s_name}</th>
                <th>
                  <Link href={`/edit/enterprise?id=${id}`}>edit</Link><br/>
                  <a onClick={() => deleteEnterprise(id)}>delete</a><br/>
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
  }

Enterprises.getInitialProps = async ({ req }) => {
  let data = [ { id: 0 } ]
  await axios.get(`http://localhost:3100/enterprise`)
    .then(res => {
      if (res.data != null) {
        data = res.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data }
}

export default Enterprises
