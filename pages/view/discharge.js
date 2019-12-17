import Nav from '../../components/nav'
import axios from 'axios'

const Discharge = ({ data, substances }) => {
  return(
    <div>
      <Nav />
      <div align="center">
        <b>ID: </b>{data.id}<br/>
        <b>Name: </b>{data.name}<br/>
        <b>Enterprise ID: </b>{data.e_id}<br/>
        <b>Enterprise: </b>{data.e_name}<br/>
        <b>Substances:</b><br/>
      </div>
      <table align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Background concentration</th>
          </tr>
        </thead>
        <tbody>
          {substances.map(({ id, name, date, concentration }) => (
            <tr>
              <th>{id}</th>
              <th>{name}</th>
              <th>{date}</th>
              <th>{concentration}</th>
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
}

Discharge.getInitialProps = async ({ query }) => {
  const { id } = query

  let data = { id: 0 }
  let substances = [ { id: 0 } ]

  await axios.get(`http://localhost:3100/discharge/${id}`)
    .then(res => {
      if (res.data != null) {
        data = res.data
      }
    })
    .catch(err => console.log(err))

   await axios.get(`http://localhost:3100/substance?id=${id}`)
    .then(res => {
      if (res.data != null) {
        substances = res.data
      }
    })
    .catch(err => console.log(err))
  
  return { data: data, substances: substances }
}

export default Discharge
