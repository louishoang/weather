import * as React from 'react';
import './App.css';
import Cities from './components/Cities';
import { City } from './types';

const cities: City[] = [
  { id: 1, 
    name: 'San Francisco', 
    lat: 37.562992, 
    long: -122.325525, 
    description: 'moderate rain',
    icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399',
    temp: 14.96
  },
  {
    id: 2,
    name: 'Hayward',
    lat: 37.668821,
    long: -122.080796,
    icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964',
    temp: 13.09,
    description: 'overcast clouds'
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cities/>
      </div>
    );
  }
}

export default App;
