import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import introJs from 'intro.js';
import 'intro.js/introjs.css'; 
import './App.css'

const App =()=> {
  const [count, setCount] = useState(0)
  const [isTourOpen, setIsTourOpen] = useState(true)
  useEffect(() => {
    if (isTourOpen) {
      const intro = introJs();
      intro.setOptions({
        steps: [
          {
            element: document.querySelector('.logo'),
            intro: 'This is step 1.',
            position: 'bottom',   
          },
          {
            element: document.querySelector('.logo react'),
            intro: 'This is step 2.',
            position: 'right',
          },
          {
            element: document.querySelector('.card'),
            intro: 'This is step 3.',
            position: 'left',
          },
          {
            element: document.querySelector('.read-the-docs'),
            intro: 'This is step 4.',
            position: 'top',
          },
        ],
        exitOnOverlayClick: false,
        showStepNumbers: true,
        showProgress:true,
        showBullets: true,
        doneLabel: 'Finish',
        overlayOpacity: 0.7,
      });

      intro.onexit(() => {
        setIsTourOpen(false);
      });

      intro.start();
    }
  }, [isTourOpen]);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank"> */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        {/* </a> */}
        {/* <a href="https://react.dev" target="_blank"> */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        {/* </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
