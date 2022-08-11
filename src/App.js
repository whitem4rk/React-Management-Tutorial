import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';



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
    const {classes} = this.props;
    return (
      <Paper  sx={{overflowX:"auto"}}> 
        <Table stickyHeader sx={{maxWidth:'1080px', minWidth:'1080px'}}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )})}
          </TableBody>
        </Table>
      </Paper> 
    );
  }
}

export default App;
