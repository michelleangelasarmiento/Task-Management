import { useState } from "react";
import NewProject from "./components/NewProject";
import NoSelectedProject from "./components/NoSelectedProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddingProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [
          ...prevState.projects,
          newProject
        ]
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddingProject={handleAddProject} onCancellingAddingProject={handleCancelAddingProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content= <NoSelectedProject onAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
