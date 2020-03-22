import React from 'react';
import './App.css';
import Main from './components/Main/main'
import {Provider} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import stackline from './images/stackline.png'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
        <div className="app-container">
          <AppBar item position="static" item xs={12} spacing={3} color="white">
              <Toolbar>
                <img src={stackline} style={{height: 45}} />
              </Toolbar>
          </AppBar>
          <Main/>
        </div>
    </Provider>
  );
}

export default App;
