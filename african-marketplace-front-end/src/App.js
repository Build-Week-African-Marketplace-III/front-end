import React from 'react';
import './App.css';
import { Login } from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />

      {/* Routes Section Start */}

      <Route exact path='/' component={Login} />
      <Route path='/signup' render={(props) => <SignUp {...props} />} />

      {/* End of Routes Section */}


    </div>
  );
}

export default App;
