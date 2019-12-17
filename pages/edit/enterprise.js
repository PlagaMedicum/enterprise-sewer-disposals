import axios from 'axios'

const postEnterprise = async (id, data) => {
  axios.post(`http://localhost:3100/enterprise/${id}`, data)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

const Enterprise = ({ id, data }) => {
  let body = {
    name: "",
  }

  return(
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={e => body.name = e.target.value} defaultValue={data.name}/>
        </label><br/>
        <a onClick={() => postEnterprise(id, body)}>Submit</a>
      </form>
      <style jsx>{`
        a {
          cursor:pointer;
          color:blue;
          text-decoration:underline;
        }
      `}</style>
    </div>
  )
}

Enterprise.getInitialProps = async ({ query }) => {
  const { id } = query

  let data = { id: 0 }
  
  await axios.get(`http://localhost:3100/enterprise/${id}`)
    .then(res => {
      if (res.data != null) {
        data = res.data
      }
    })
    .catch(err => console.log(err))

  return { id: id, data: data}
}

export default Enterprise
