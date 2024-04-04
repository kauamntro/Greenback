import './App.css';
import Panel from './Panel';
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Panel />
    </ThemeProvider>
    </>
  )
}

export default App
