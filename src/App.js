import React, { Component } from 'react';

// 1. Dependencies
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 3. Components
import Home from './pages/Home'
import Chapter37 from './pages/chapters/Chapter37'
import SkyFloor from './pages/chapters/Chapter37/SkyFloor'

//for 37th skyfloor (temporary import
import Title from './pages/chapters/Chapter37/SkyFloor/Title'
import Bible from './pages/chapters/Chapter37/SkyFloor/Bible'
import BgStory from './pages/chapters/Chapter37/SkyFloor/BgStory'
import SelectChurch from './pages/chapters/Chapter37/SkyFloor/SelectChurch'
import IntroduceChurch from './pages/chapters/Chapter37/SkyFloor/IntroduceChurch'
import FindLocation from './pages/chapters/Chapter37/SkyFloor/FindLocation'
import ReadMessages from './pages/chapters/Chapter37/SkyFloor/ReadMessages'
import Puzzle from './pages/chapters/Chapter37/SkyFloor/Puzzle'
import Answer from './pages/chapters/Chapter37/SkyFloor/Answer'
import Closing from './pages/chapters/Chapter37/SkyFloor/Closing'
import Conversation from './pages/chapters/Chapter37/SkyFloor/Conversation'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router className='FCC'>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/chapter37' component={Chapter37} />
          <Route path='/skyfloor' component={SkyFloor} />
          {/*You need to study router ASAP*/}
          <Route path='/title' component={Title} />
          <Route path='/bible' component={Bible} />
          <Route path='/bg-story' component={BgStory} />
          <Route path='/select-church' component={SelectChurch} />
          <Route path='/introduce-church' component={IntroduceChurch} />
          <Route path='/find-location' component={FindLocation} />
          <Route path='/read-messages' component={ReadMessages} />
          <Route path='/puzzle' component={Puzzle} />
          <Route path='/answer' component={Answer} />
          <Route path='/closing' component={Closing} />
          <Route path='/conversation' component={Conversation} />
        </div>
      </Router>
    );
  }
}

export default App;
