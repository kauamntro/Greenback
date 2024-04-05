import MainPanel from "./components/MainPanel";
import SideBarPanel from "./components/SideBarPanel";

interface PanelProps {
  func?: () => void; 
}  

export default function Panel ({func}:PanelProps) {
    return (
        <main className="flex">
          <SideBarPanel func={func}/>
          <MainPanel func={func}/>
        </main>
    )
}