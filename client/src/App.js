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
import { CircularProgress } from '@mui/material';
import CustomerAdd from './components/CutomerAdd';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed: 0
    })
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20)
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

progress = () => {
  const {completed} = this.state;
  this.setState({completed: completed >= 100 ? 0 : completed + 1})
}

  render() {
    const {classes} = this.props;
    return (
      <div>
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
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => { return (
                <Customer stateRefresh={this.stateRefresh}
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )}) : 
              <TableRow>
                <TableCell colSpan='6' align='center'>
                  <CircularProgress sx={{}} variant="indeterminate" value={this.state.completed}></CircularProgress>
                </TableCell>
              </TableRow>
              
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>
      </div>
    );
  }
}

export default App;
