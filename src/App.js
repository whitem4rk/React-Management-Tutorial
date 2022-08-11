import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
    'id':1,
    'image': 'https://placeimg.com/64/64/any',
    'name':'james',
    'birthday' : '12123',
    'gender' : 'm',
    'job':'studnet'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/any',
    'name':'james',
    'birthday' : '12123',
    'gender' : 'm',
    'job':'studnet'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/any',
    'name':'james',
    'birthday' : '12123',
    'gender' : 'm',
    'job':'studnet'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div> 
    );
  }
}

export default App;
