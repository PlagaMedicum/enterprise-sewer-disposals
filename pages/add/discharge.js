import axios from 'axios'

const postDicharge = async (data) => {
  axios.post(`http://localhost:3100/discharge`, data)
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
        <a onClick={() => postDicharge(data)}>Submit</a>
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
