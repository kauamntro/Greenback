import './App.css';
import ContentSection from './ContentSection';
import Panel from './Panel';
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState(false)

  function changeScreen () {
    return setScreen(!screen)
  }

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
        screen === false ? <ContentSection func={changeScreen}/> : <Panel func={changeScreen}/>
      }
    </ThemeProvider>
    </>
  )
}

export default App
