import axios from 'axios'

const postEnterprise = async (data) => {
  axios.post(`http://localhost:3100/enterprise`, data)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

export default () => {
  let data = {
    name: "",
  }

  return(
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={e => data.name = e.target.value}/>
        </label><br/>
        <a onClick={() => postEnterprise(data)}>Submit</a>
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
