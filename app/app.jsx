import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Home from './Home';
import styles from './main.less';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Contents extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {page: 1};
  }

  onHomeClick(){
    this.setState({page: 1});
    console.log("home");
  }
  onAboutClick(){
    this.setState({page: 2});
    console.log("about");
  }
  onTermClick(){
    this.setState({page: 3});
    console.log("term");
  }
  onPrivacyClick(){
    this.setState({page: 4});
    console.log("privacy");
  }

  render() {
    const page = this.state.page;    
    let content = null;    
    if (page == 1 ) {
      //content = <div><h1>Home</h1></div>
      content = <Home name="home"/>;
    } else if (page == 2 ) {
      content = <div><h1>About</h1></div>
    } else if (page == 3 ) {
      content = <div><h1>Term</h1></div>
    } else if (page == 4 ) {
      content = <div><h1>Privacy</h1></div>
    }


    let boundHomeClick = this.onHomeClick.bind(this);
    let boundAboutClick = this.onAboutClick.bind(this);
    let boundTermClick = this.onTermClick.bind(this);
    let boundPrivacyClick = this.onPrivacyClick.bind(this);

    return (
      <div>
        <Navbar color="faded" light>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <NavLink href="#" onClick={boundHomeClick}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={boundAboutClick}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={boundTermClick}>Term</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={boundPrivacyClick}>Privacy</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div>
          {content}
          <Bangke />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Contents />
        </div>
        <div>
          <Hello name="world"/>
          <Hello name="React"/>
          <Hello name="Less"/>
        </div>
      </div>
    );
  }
}

export default class Bangke extends React.Component {
  render() {
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}


//ReactDOM.render(React.createElement(App), document.getElementById('app'), null);
ReactDOM.render(<Contents />, document.getElementById('app'), null);
