import axios from 'axios'
import {useState} from 'react'

export default function useResquestDataPost(url, body, auth, initialState) {
    const [data, setData] = useState(initialState)

   const onCreateTrip = () => {
        axios
          .post(url, body, auth)
          .then((res) => {
            setData(res.data);
            console.log("cheguei", res.data)
          })
          .catch((err) => {
            console.log(err.message);
          })

      return data
        }
}
