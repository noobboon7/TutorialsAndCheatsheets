import {useEffect, useState} from 'react';


export const useFetch = url => {
  const [state, setState] = useState({data: null, loading: true})

  useEffect(() => {
    setState({data:null, loading:true})
    fetch(url)
    .then(x => x.text)
    .then(y => {y.setState({data:null, loading:false})}
  }, [url])
}
