import React from 'react';
import './App.css';
import { Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import BookList from './Components/bookList'

function App() {
  return (
    <Container>
      <h1 className="my-2 text-primary">GOQUO</h1>
      <h6 className="mb-5 text-info font-italic">Get the best Hotel at best Price </h6>
      <BookList/> 
    </Container>
  );
}

export default App;
