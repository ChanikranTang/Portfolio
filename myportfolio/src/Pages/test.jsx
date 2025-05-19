import React, { createContext,useContext,useState } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];
const defaultValue = languages[0];
const MyContext = React.createContext(defaultValue);

function App() {
  // implement Context here so can be used in child components
  return (
    <MyContext.Provider value={defaultValue}>
      <MainSection />
    </MyContext.Provider>
  );
}

function MainSection() {
  const [stateBtn,setStateBtn] = useState(true);
  let language = useContext(MyContext);
  const toggleBtn = () => {
    setStateBtn(prev => !prev);
    if(stateBtn == true)
      { language = languages[0];
      }
    else{
      { language = languages[1];
      }
    }
  };
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <button id="changeFavorite" onClick={toggleBtn}>toggle language</button>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;