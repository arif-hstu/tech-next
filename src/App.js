import { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import PostDetails from './components/Home/PostDetails/PostDetails/PostDetails';
import UserDetails from './components/Home/UserDetails/UserDetails/UserDetails';

export const PostsContext = createContext();
export const PageCountContext = createContext();
export const SearchContext = createContext();
export const UserPostsContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageCount}&_limit=10`)
      .then(res => res.json())
      .then(data => {
        if (posts[0]) {
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
            <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
              <UserPostsContext.Provider value={[userPosts, setUserPosts]}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route exact path="/post/:id">
                    <PostDetails />
                  </Route>
                  <Route exact path="/user/:id">
                    <UserDetails />
                  </Route>
                </Switch>
              </UserPostsContext.Provider>
            </SearchContext.Provider>
          </PostsContext.Provider>
        </PageCountContext.Provider>
      </Router>
    </div>
  );
}

export default App;
