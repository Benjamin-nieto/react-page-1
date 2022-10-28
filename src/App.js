//import logo from './logo.svg';
import './App.css';
// import Estados from './components/Estado';
// import Contador from './components/Contador';
// import Listas from './components/Listas'
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, Row, Col, Container } from 'react-bootstrap';

  function App() {
    return (

      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="sm">

        <Container>
        <Row>
          <Col>
            <Formulario />
            {/* <Estados />
            <Contador />
            <Listas /> */}
          </Col>
        </Row>
      </Container>




    </ThemeProvider>


  );
}

export default App;
