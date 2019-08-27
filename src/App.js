import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline'
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joeBloggs@gmail.com',
  age: '24',
  onlineStatus: true
}]

class App extends Component {
  render(){
  return (

    <div className="App">

      <Header />

      <section className="main">
        <Headline   header={1}
         desc="Click the button to render posts" tempArr={tempArr} />

      </section>
    </div>
  );
}
}
export default App;
