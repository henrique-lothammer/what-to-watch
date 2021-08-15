import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import { colors } from 'styles/variables'
import { Form, Input, SubmitButton } from './styles'

const SearchBox = (): ReactElement => {
  const history = useHistory()
  const [input, setInput] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input) return
    history.push(`/search?q=${input}`)
  }

  return (
    <Form onSubmit={handleSubmit} data-testid='search-box'>
      <Input
        type='text'
        placeholder='enter the movie name'
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
