import React from 'react'

// 1. Dependencies
// 2. Components
import { Link } from 'react-router-dom'
import { ChevronRight } from 'react-feather'
import {
  HomeSectionTitle,
  QuickMenuItem,
  WeeklyMultiChart,
  CurrentWeekChart
} from './home/index'
import { UserCheck, BookOpen, Edit3 } from 'react-feather'

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//-----*-----*-----*-----*-----*-----//

const Home = () => {
  return (
    <StyledHome className="FRL">
      {/* ----------COLUMN 1---------- */}
      <div className="home-column column1">
        {/* 교육일정 */}
        <div className="section-container">
          <HomeSectionTitle title="팽이 교육 일정" path="" />
          <div>Card</div>
        </div>
        {/* 알림사항 및 행사일정 */}
        <div className="section-container">
          <HomeSectionTitle title="알림사항 및 행사일정" path="" />
          <div>알림 1</div>
          <div>달력</div>
          <div>행사일정</div>
          <div>행사일정</div>
          <div>자세히보기</div>
        </div>
      </div>
      {/* ----------COLUMN 2---------- */}
      <div className="home-column column2">
        <div className="section-container">
          <HomeSectionTitle title="어린이부 출석현황" path="" />
          <div className="charts-container FCT">
            <WeeklyMultiChart />
            <CurrentWeekChart />
          </div>
        </div>
      </div>
      {/* ----------COLUMN 3---------- */}
      <div className="home-column column3">
        <div className="section-container" path="">
          <HomeSectionTitle title="Quick Menu" path="" />
          <QuickMenuItem title="출석부 체크하기" path="">
            <UserCheck size={20} />
          </QuickMenuItem>
          <QuickMenuItem title="교재 보기" path="">
            <BookOpen size={20} />
          </QuickMenuItem>
          <QuickMenuItem title="교재 작성하기" path="">
            <Edit3 size={20} />
          </QuickMenuItem>
        </div>
      </div>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  width: 100%;
  & .home-column {
    height: 100vh;
    padding: 1rem;
  }
  & .column1 {
    flex-grow: 1.4;
    margin-right: 16px;
  }
  & .column2 {
    flex-grow: 5;
    margin-right: 16px;
  }
  & .column3 {
    flex-grow: 1;
  }
`

export default Home
