import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'

const quotesURL = 'http://localhost:3333/api/quotes'

const initialFormState = {
  id: '',
  text: '',
  author: '',
}

export default function Container() {
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  const [quotes, setQuotes] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)

  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  const getQuotes = () => {
    console.log(`TASK 1- Use 'axios' or 'fetch' to [GET] a list of quotes
      from 'http://localhost:3333/api/quotes'. On success, the quotes
      in the response body should be set as the 'quotes' slice of state.
      On error, 'handleError' should be called.`)
  }

  const postQuote = ({ text, author }) => {
    console.log(`TASK 2- Use 'axios' or 'fetch' to [POST] a new quote
      in 'http://localhost:3333/api/quotes'. On success, the new quote
      in the response body should be added to the 'quotes' slice of state.
      On error, 'handleError' should be called. Finally, the form should be reset.`)
  }

  const putQuote = ({ id, text, author }) => {
    console.log(`TASK 3- Use 'axios' or 'fetch' to [PUT] an existing quote
      in 'http://localhost:3333/api/quotes/:id'. On success, the updated quote
      in the response body should be used to replace the old version of the quote in 'quotes'.
      On error, 'handleError' should be called. Finally, the form should be reset.`)
  }

  const deleteQuote = (id) => {
    console.log(`TASK 4- Use 'axios' or 'fetch' to [DELETE] an existing quote
      in 'http://localhost:3333/api/quotes/:id'. On success, the deleted quote
      should be removed from the 'quotes' slice of state'.
      On error, 'handleError' should be called. Finally, the form should be reset.`)
  }

  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  const editQuote = (id) => {
    console.log(`TASK 5- This helper should find inside 'quotes' the quote with the given 'id'.
      Use the 'id', 'text' and 'author' properties of this quote to populate the corresponding
      fields of the 'formValues' slice of state.`)
  }

  const handleError = err => { debugger } // eslint-disable-line

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  useEffect(() => getQuotes(), [])

  return (
    <div className='container'>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map((q, i) => (
            <li key={q.id}>
              <div>{q.text} ({q.author})</div>
              <button onClick={() => editQuote(q.id)}>Edit</button>
              <button onClick={() => deleteQuote(q.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <Form
        values={formValues}
        setValues={setFormValues}
        submitHandlers={{ postQuote, putQuote }}
        reset={resetForm}
      />
    </div>
  )
}
