import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Api from 'services/Api'
import Footer from 'components/Footer'
import HeaderBar from 'components/HeaderBar'
import PostersList from 'components/PostersList'

import { IMovieList, IMovieListJSON } from 'components/PostersSection/types'
import { colors } from 'styles/variables'
import { Button, PageText, Pagination, Title } from './styles'

const Search: React.FC = () => {
  const history = useHistory()
  const queryParams = new URLSearchParams(useLocation().search)
  const query = queryParams.get('q')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState<IMovieList[]>([] as IMovieList[])
  const [page, setPage] = useState(Number(queryParams.get('page')) || 1)
  const [totalPages, setTotalPages] = useState(() => 0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function searchMovie() {
      setLoading(true)
      try {
        const response = await Api.get(
          `/search/movie?query=${query}&page=${page}`
        )
        const {
          results,
          total_results: totalResults,
          total_pages: pages,
        } = response.data
        setMovies(
          results.map((movie: IMovieListJSON) => {
            return {
              id: movie.id,
              title: movie.title,
              voteAverage: movie.vote_average,
              posterPath: movie.poster_path,
            }
          })
        )
        setTotal(totalResults)
        setTotalPages(pages)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    searchMovie()
  }, [query, page])

  const prevPage = () => {
    const p = page - 1
    if (p > 0) {
      setPage(p)
      history.push(`/search?q=${query}&page=${p}`)
    }
  }
  const nextPage = () => {
    const p = page + 1
    if (p <= totalPages) {
      setPage(p)
      history.push(`/search?q=${query}&page=${p}`)
    }
  }

  return (
    <>
      <HeaderBar />
      <div className='wrapper'>
        <main>
          <Title>
            {`We found ${total} movies for `}
            <span>{`"${query}"`}</span>.
          </Title>
          {movies.length ? (
            <>
              <PostersList movies={movies} />

              <Pagination>
                <Button
                  type='button'
                  onClick={prevPage}
                  disabled={page === 1}
                  title='Previous Page'
                >
                  <FaChevronLeft color={colors.font} size={20} />
                </Button>
                <PageText>{`${page}/${totalPages}`}</PageText>
                <Button
                  type='button'
                  onClick={nextPage}
                  disabled={page === totalPages}
                  title='Next Page'
                >
                  <FaChevronRight color={colors.font} size={20} />
                </Button>
              </Pagination>
            </>
          ) : (
            ''
          )}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Search
