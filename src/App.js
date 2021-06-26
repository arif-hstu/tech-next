import { createContext, useEffect, useState } from 'react';
import './App.scss';

import Home from './components/Home/Home/Home';
export const PostsContext = createContext();
export const LoadedContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  const loadMore = () => {
    const allPosts = posts;
    const splicedPosts = allPosts.splice(0, 10);
    console.log('slicedarray:', splicedPosts);
    console.log('data', allPosts)
  }

  return (
    <div className="App">
      <PostsContext.Provider value={posts}>
        <LoadedContext.Provider value={posts}>
          <Home />
        </LoadedContext.Provider>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
