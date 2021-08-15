import React, { ReactElement } from 'react'
import { format, getYear, startOfWeek, endOfWeek } from 'date-fns'

import HeaderBar from 'components/HeaderBar'
import PostersSection from 'components/PostersSection'
import Footer from 'components/Footer'

const Dashboard = (): ReactElement => {
  const today = new Date()
  const start = format(startOfWeek(today), 'yyyy-MM-dd')
  const end = format(endOfWeek(today), 'yyyy-MM-dd')
  const lastYear = getYear(today) - 1
  const sections = [
    {
      title: 'Most popular',
      query: '/discover/movie?sort_by=popularity.desc',
    },
    {
      title: 'In theaters',
      query: `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&sort_by=vote_average.desc`,
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
