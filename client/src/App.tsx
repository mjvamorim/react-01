import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MenuNav } from './components/MenuNav';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <MenuNav />
          </Col>
        </Row>
        <Row>
          <Col className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Col>
        </Row>
        <Row className="footer">
          <Col>
            <Button variant="sucess" className="mr-1">
              Aprenda mais!
            </Button>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
