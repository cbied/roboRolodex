import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from '../utils/data.utils';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

export type Robot = {
  id: number,
  name: string,
  username: string,
  email: string
}

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
  const fetchUsers = async () => {
    const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
    return setRobots(users)
  }

  fetchUsers()
  }, [])

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter((robot: Robot) => {
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
