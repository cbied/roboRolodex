import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => setRobots(users))
  }, [])

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  const renderLodaingPage = () => {
    return <h1 className='loading'>Loading</h1>
  }

  const renderRobotsPage = () => {
    return (
      <div className="tc">
        <h1 className='f1 title'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
      </div>
    )
  }

  return !robots.length ? renderLodaingPage() : renderRobotsPage()
}

export default App;
