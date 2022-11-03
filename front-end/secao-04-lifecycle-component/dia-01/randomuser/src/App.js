import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      userObj: [],
      loading: true,
    };
  }

  fetchUsers = () => {
    this.setState(
      { loading: true },
      () => {
        fetch('https://api.randomuser.me/')
        .then(response => response.json())
        this.setState(
          loading: false,
          {user: data.results}
        )
      }
    )
    
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { userObj, loading } = this.state
    const loadingElement = <span>Carregando...</span>
    console.log('Renderizou');
  }

  return () {
    <div>
      <p>
        {
          loading ? loadingElement : this.fetchUsers
        }
      </p>
    </div>
  }
}

export default App;
