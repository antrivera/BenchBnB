import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
