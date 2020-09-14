import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import { TitleComponent } from './TitleComponent';

var App = () => {
  const [state, setState] = useState({
    content: "",
    results: [],
    selected: {}
    
  });
  const apiurl = "https://www.omdbapi.com/?apikey=dfe6d885";

  const handleInput = (e) => {
    let content = e.target.value;

    setState(prevState => {
      return { ...prevState, content: content }
    });
  }

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.content).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleClick = () => {
    axios(apiurl + "&s=" + state.content).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  }

  const openPopup = data => {
    setState(prevState => {
      return { ...prevState, selected: data };
    });
  };

 

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }




  return (
    <div className="App">
      <header>
        <h1>Film Search Site</h1>
      </header>
      <main>

    

      <div class="introduction_button">
        <div className="introduction">
          See more of my projects here:&ensp;  
          <a href="https://github.com/MichalKoscinski?tab=repositories" class="GitHub">
            My GitHub
            </a>
            </div>
            <div class="button" onClick={handleClick}>
            Search
            </div>
        </div>
        <Search handleInput={handleInput} search={search} />

        {(state.results && state.results.length>0)?<Results results={state.results} openPopup={openPopup} />:
        <div className="nothing"> Nothing to show. Please, use the search function </div>
        }
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
      <TitleComponent title="Film Search Site" />
    </div>
  );
}

export default App
