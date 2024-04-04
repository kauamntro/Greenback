import MainPanel from "./components/MainPanel";
import SideBarPanel from "./components/SideBarPanel";

export default function Panel ( ) {
    return (
        <main className="flex">
          <SideBarPanel />
          <MainPanel />
        </main>
    )
}