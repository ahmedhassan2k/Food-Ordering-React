import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import Layout from './components/Layout';
import './app.css';
function App() {
  return (
    <div className="App">
      <Layout>
            
        <Register />
        <Login />
      
      </Layout>
    </div>
  );
}

export default App;
