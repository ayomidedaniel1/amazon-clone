import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home, Checkout, Footer, Login } from './components';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './context/StateProvider';

function App () {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log('The USER is >>> ', authUser);

      if (authUser) {
        // user is logged

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/checkout' exact element={<Checkout />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
