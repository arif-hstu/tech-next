import { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
export const PostsContext = createContext();
export const PageCountContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageCount}&_limit=10`)
      .then(res => res.json())
      .then(data => {
        if (posts[0]) {
          console.log('previous data:', posts)
          const loadedPosts = [...posts, ...data];
          setPosts(loadedPosts);
        } else {
          setPosts(data)
        }
      })
  }, [pageCount]);

  return (
    <div className="App">
      <Router>
        <PageCountContext.Provider value={[pageCount, setPageCount]}>
          <PostsContext.Provider value={posts}>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Dashboard />
              </Route>
            </Switch>
          </PostsContext.Provider>
        </PageCountContext.Provider>
      </Router>
    </div>
  );
}

export default App;
