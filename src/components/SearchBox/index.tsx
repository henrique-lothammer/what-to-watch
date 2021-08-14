import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import { colors } from 'styles/variables'
import { Form, Input, SubmitButton } from './styles'

const SearchBox = (): ReactElement => {
  const history = useHistory()
  const [input, setInput] = useState('')
  console.log('render')
  function handleSubmit(e: React.FormEvent) {
    console.log('entrou')
    e.preventDefault()
    history.push(`/search?q=${input}`)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Type the name of the movie'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SubmitButton type='submit'>
        <FaSearch color={colors.font} size={20} />
      </SubmitButton>
    </Form>
  )
}

export default SearchBox
