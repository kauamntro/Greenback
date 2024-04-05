import MainPanelHeader from "./MainPanelHeader";
import MainPanelSectionMain from "./MainPanelSectionMain";

interface MainPanelProps {
    func?: () => void; 
  } 

export default function MainPanel ({func}:MainPanelProps) {
    return (
        <div className="flex flex-col w-full">
            <MainPanelHeader functionExterna={func}/>
            <MainPanelSectionMain />
        </div>
    )
}