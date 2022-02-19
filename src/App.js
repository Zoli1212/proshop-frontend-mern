import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Container} from 'react-bootstrap'

import './bootstrap.min.css'
import { Footer } from './components/Footer';
import { HomeScreen } from  './screens/HomeScreen'

function App() {
  return (
    <>
    <Header />

    <Container>
      <main className='py-3'>

      <HomeScreen />
      </main>

    </Container>

    <Footer />
  
    </>
  );
}

export default App;
