import React from 'react';
import './App.scss';

import Pickles from '../components/shared/Pickles/Pickles';

function App() {
  return (
    <div className="App">
      <button className="btn btn-success">I'm Alive!</button>
      <Pickles/>
    </div>
  );
}

export default App;
