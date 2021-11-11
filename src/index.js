import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const about = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

const login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"></input>
          <label htmlFor="username">Username</label>
        </div>
        <div>
        <input type="password" name="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render(
  <Router>
  <div>
  <Route path='/' component={Home} />
  <Route path='/about' component={about} />
  <Route path='/login' component={login} />
  </div>
  </Router>,
  document.getElementById('root')
);
