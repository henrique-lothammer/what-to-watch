import React, { ReactElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { colors } from 'styles/variables'
import { Container, Button, PageText } from './styles'

interface IProps {
  prevPage(page: number): void
  nextPage(page: number): void
  page: number
  totalPages: number
}

const Pagination = ({
  prevPage,
  nextPage,
  page,
  totalPages,
}: IProps): ReactElement => {
  const callPrev = () => {
    const p = page - 1
    if (p > 0) {
      prevPage(p)
    }
  }
  const callNext = () => {
    const p = page + 1
    if (p <= totalPages) {
      nextPage(p)
    }
  }

  return (
    <Container data-testid='pagination'>
      <Button
        type='button'
        onClick={callPrev}
        disabled={page === 1}
        title='Previous Page'
        data-testid='button-prev'
      >
        <FaChevronLeft color={colors.font} size={20} />
      </Button>
      <PageText>{`${page}/${totalPages}`}</PageText>
      <Button
        type='button'
        onClick={callNext}
        disabled={page === totalPages}
        title='Next Page'
        data-testid='button-next'
      >
        <FaChevronRight color={colors.font} size={20} />
      </Button>
    </Container>
  )
}

export default Pagination
