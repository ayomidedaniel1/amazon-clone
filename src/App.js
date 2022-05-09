import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home, Checkout, Footer, Login } from './components';

function App () {
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
