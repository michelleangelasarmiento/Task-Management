import NewProject from "./components/NewProject";
import NoSelectedProject from "./components/NoSelectedProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <NewProject/> */}
      <NoSelectedProject/>
    </main>
  );
}

export default App;
