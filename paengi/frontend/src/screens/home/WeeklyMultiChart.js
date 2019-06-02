import React from 'react'

// 1. Dependencies
// 2. Components
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import { ChevronLeft, ChevronRight } from 'react-feather'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

const data = [
  {
    date: '5/5',
    total: 65,
    g1: 10,
    g2: 12,
    g3: 3,
    g4: 13,
    g5: 15,
    g6: 8,
    t: 27
  },
  {
    date: '5/12',
    total: 76,
    g1: 8,
    g2: 13,
    g3: 17,
    g4: 9,
    g5: 11,
    g6: 12,
    t: 27
  },
  {
    date: '5/19',
    total: 58,
    g1: 5,
    g2: 13,
    g3: 8,
    g4: 10,
    g5: 9,
    g6: 13,
    t: 27
  },
  {
    date: '5/26',
    total: 61,
    g1: 13,
    g2: 8,
    g3: 10,
    g4: 15,
    g5: 5,
    g6: 13,
    t: 27
  },
  { date: '6/2', total: null }
]
//-----*-----*-----*-----*-----*-----//

const WeeklyMultiChart = () => {
  return (
    <StyledWeeklyMultiChart className="FRSB">
      <div className="prev arrow-section FCC">
        <ChevronLeft stroke-width={1} size={40} />
      </div>
      <div className="chart-container FCT">
        <LineChart className="text" width={550} height={140} data={data}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="linear" dataKey="total" stroke="#EC5368" />
        </LineChart>
        <BarChart
          className="text"
          width={550}
          height={140}
          data={data}
          barGap={0}
          barCategoryGap={14}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="date" axisLine={false} tickLine={false} />

          <Tooltip />
          <Bar dataKey="g1" fill="#FFDEE4" />
          <Bar dataKey="g2" fill="#BCEDF2" />
          <Bar dataKey="g3" fill="#F9E179" />
          <Bar dataKey="g4" fill="#F5C586" />
          <Bar dataKey="g5" fill="#8ACCE6" />
          <Bar dataKey="g6" fill="#B66B75" />
        </BarChart>
      </div>
      <div className="next arrow-section FCC">
        <ChevronRight stroke-width={1} size={40} />
      </div>
    </StyledWeeklyMultiChart>
  )
}

const StyledWeeklyMultiChart = styled.div`
  & .arrow-section {
    opacity: 0.2;
    transition: 0.2s;
  }
  & .arrow-section:hover {
    opacity: 1;
  }
  & .text {
    font-size: 14px;
  }
`

export default WeeklyMultiChart
