import React from 'react';
import './App.css';
import { Recipes } from './Components/HomePage'
import { SearchTool } from './Components/SearchTool'

function App() {
  return(
    <>
    <SearchTool />
    <Recipes/>
    </>
  )
}
export default App;
