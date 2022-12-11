import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { SubSidebar } from "./components/SubSidebar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <SubSidebar />
      <Content />
    </div>
  );
}

export default App;
