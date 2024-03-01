import React, { Component } from 'react';

class ChildComp extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <>
        <h1>Name : {name}</h1>
        <h2>Email : {email}</h2>
        <hr />
      </>
    );
  }
}

class StateAndPropsClassExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { name, email } = this.state;

    return (
      <>
        <label>
          Name1 :
          <input type="text" value={name} onChange={this.handleNameChange} />
        </label>
        <label>
          Email1 :
          <input type="text" value={email} onChange={this.handleEmailChange} />
        </label>

        <hr />

        <ChildComp name={name} email={email} />
        <ChildComp name="Brijesh" email="123@gmail.com" />
      </>
    );
  }
}

export default StateAndPropsClassExample;
