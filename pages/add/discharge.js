import axios from 'axios'

export default () => {
  return(
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  )
}
