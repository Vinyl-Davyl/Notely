import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.model';


export default function App() {
  const [ notes, setNotes ] = useState<Note[]>([{
    id: (new Date).toLocaleString(),
    title: "Title",
    text: " Write a description and pick a color",
    color: "#E4D9FF",
    date: (new Date).toLocaleString()
  }]);


  return (
    <div>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={ notes } setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={ notes } setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
