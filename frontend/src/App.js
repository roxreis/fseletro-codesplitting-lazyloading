import Menu from './Components/Menu/Menu'
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Routes from './routes';
import {lazy, Suspense} from 'react';
import '../src/css/style.css';

// const Produtos = lazy(() => import('./code-splitting/Produto'));
const Footer = lazy(() => import('./code-splitting/footer'));

function App() {
  return (
    <BrowserRouter>
      <Container>
      <div className="App">
        <header><Menu /></header>
        <main>
            <Routes />
        </main>
        <Suspense fallback={<h5 class="text-center -mt-5">carregando...</h5>}>
          <Footer />
        </Suspense>
      </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;