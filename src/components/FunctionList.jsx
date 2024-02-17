import React from 'react'
import { useState, useEffect } from 'react'
const FunctionList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortController.signal })
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching data:', error);
        }
      });
      return () => {
        abortController.abort();
      };
  }, [])
  return (
    <ul>
        {posts.map((item) => <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </li>)}
      </ul>
  )
}

export default FunctionList