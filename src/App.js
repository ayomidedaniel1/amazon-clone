import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home, Checkout, Footer } from './components';

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/checkout' exact element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
