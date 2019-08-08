import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RecipeFinder from './Containers/RecipeFinder/RecipeFinder';

function App() {
  return (
    <BrowserRouter>
      <RecipeFinder />
    </BrowserRouter>
  );
}

export default App;
