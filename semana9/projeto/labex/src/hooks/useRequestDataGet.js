import axios from 'axios'
import {useState, useEffect} from 'react'

export default function useResquestDataGet(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
          .get(url)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, [url]);

      return data
}
