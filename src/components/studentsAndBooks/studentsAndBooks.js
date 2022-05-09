import * as React from 'react';
import Books from '../studentsAndBooks/books/books';
import Students from './students/students';

function StudentsAndBooks() {
  return (
    <>
      <Students/>
      <br />
      <Books/>
    </>
  );
}

export default StudentsAndBooks;