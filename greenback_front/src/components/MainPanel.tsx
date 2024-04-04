import MainPanelHeader from "./MainPanelHeader";
import MainPanelSectionMain from "./MainPanelSectionMain";

export default function MainPanel () {
    return (
        <div className="flex flex-col w-full">
            <MainPanelHeader />
            <MainPanelSectionMain />
        </div>
    )
}