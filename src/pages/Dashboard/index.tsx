import React, { ReactElement } from 'react'
import { getYear } from 'date-fns'

import HeaderBar from 'components/HeaderBar'
import PostersSection from 'components/PostersSection'
import Footer from 'components/Footer'

const Dashboard = (): ReactElement => {
  const today = new Date()
  const lastYear = getYear(today) - 1
  const sections = [
    {
      title: 'Most popular',
      query: '/discover/movie?sort_by=popularity.desc',
    },
    {
      title: 'Best score',
      query: `/discover/movie?sort_by=vote_average.desc&vote_count.gte=2000`,
    },
    {
      title: 'Top movies of last year',
      query: `/discover/movie?primary_release_year=${lastYear}&sort_by=vote_average.desc&vote_count.gte=2000`,
    },
  ]
  return (
    <>
      <HeaderBar />
      <main data-testid='dashboard'>
        <div className='wrapper'>
          {sections.map((section) => (
            <PostersSection key={section.title} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Dashboard
