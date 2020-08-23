import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {


  const [user, setUser] = useState(null)


  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
            <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>
                  <Route path='/rooms/:roomId'>
                    <Chat />
                  </Route>
                  <Route exact path='/' >
                    <Chat />
                  </Route>
                </Switch>
              </Router>
            </div>
          )
      }

    </div>
  );
}

export default App;
