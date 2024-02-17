import React from 'react'

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }
  componentDidMount(){
    this.abortController = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/posts', { signal: this.abortController.signal })
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching data:', error);
        }
      });
  }
  componentWillUnmount() {
    this.abortController.abort();
  }
  render() {
    return ( 
      <ul>
        {this.state.posts.map((item) => <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </li>)}
      </ul>
      )
  }
}


export default ClassList