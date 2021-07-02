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
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Banner from './components/Shared/Banner/Banner';
import Login from './components/Shared/Login/Login/Login';

export const PostsContext = createContext();
export const PageCountContext = createContext();
export const SearchContext = createContext();
export const UserPostsContext = createContext();
export const LoggedInContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState({
    id: localStorage.getItem("userId") || 2,
    name: localStorage.getItem("userName") || 'Ervin Howell'
  });

  // fetch post data from the server
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
    <div id="App" className="App">
      <Router>
        <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
          <PageCountContext.Provider value={[pageCount, setPageCount]}>
            <PostsContext.Provider value={posts}>
              <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
                <UserPostsContext.Provider value={[userPosts, setUserPosts]}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/blog">
                      <Home />
                    </Route>
                    <PrivateRoute exact path="/dashboard">
                      <Dashboard />
                    </PrivateRoute>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    <Route exact path="/post/:id">
                      <PostDetails />
                    </Route>
                    <Route exact path="/user/:id">
                      <UserDetails />
                    </Route>
                    <Route path="/">
                      <NotFound>
                        <Banner notFound={'notFound'} />
                      </NotFound>
                    </Route>
                  </Switch>
                </UserPostsContext.Provider>
              </SearchContext.Provider>
            </PostsContext.Provider>
          </PageCountContext.Provider>
        </LoggedInContext.Provider>
      </Router>
    </div>
  );
}

export default App;
