import React from 'react'

// 1. Dependencies
// 2. Components
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const currentWeekData = [
  {
    name: '1학년',
    amount: 13
  },
  {
    name: '2학년',
    amount: 8
  },
  {
    name: '3학년',
    amount: 10
  },
  {
    name: '4학년',
    amount: 15
  },
  {
    name: '5학년',
    amount: 5
  },
  {
    name: '6학년',
    amount: 13
  }
]

const colors = [
  '#FFDEE4',
  '#BCEDF2',
  '#F9E179',
  '#F5C586',
  '#8ACCE6',
  '#B66B75'
]

const CurrentWeekChart = () => {
  return (
    <StyledCurrentWeekChart className="FRSB">
      <PieChart width={120} height={120}>
        <Pie
          data={currentWeekData}
          cx="50%"
          cy="50%"
          outerRadius={60}
          dataKey="amount"
          nameKey="name"
        >
          {currentWeekData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} stroke="none" />
          ))}
        </Pie>
      </PieChart>

      <BarChart
        className="text"
        width={300}
        height={200}
        data={currentWeekData}
        layout="vertical"
      >
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <XAxis type="number" hide={true} />
        <Bar dataKey="amount">
          {currentWeekData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </StyledCurrentWeekChart>
  )
}

const StyledCurrentWeekChart = styled.div`
  & .grade-bar-chart {
  }
  & .text {
    font-size: 14px;
    color: var(--gray4);
    font-weight: normal;
  }
`

export default CurrentWeekChart
