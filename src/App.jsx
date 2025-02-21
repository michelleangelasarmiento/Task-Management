import { useState } from "react";
import NewProject from "./components/Project/NewProject";
import NoSelectedProject from "./components/Project/NoSelectedProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/Project/SelectedProject";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  /* Projects related */

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

  function handleSelectingProject(id) {
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
    
  }

  function handleDeleteProject() {
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((proj)=>proj.id !== prevState.selectedProjectId)
      };
    });
  }

  /* Tasks related */
  function handleAddTask(task) {
    setProjectState(prevState => {
      const newTask = {
        text: task,
        projectId:prevState.selectedProjectId,
        id: Math.random()
      };

      return {
        ...prevState,
        tasks:[...prevState.tasks, newTask]
      }
    })
    
  }

  function handleDeleteTask(id) {
     setProjectState(prevState => {
      return {
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id !== id)
      };
    });
    
  }

  const selectedProjectById = projectState.projects.find(proj => proj.id === projectState.selectedProjectId);

  let content = <SelectedProject proj={selectedProjectById} onDelete={handleDeleteProject}
    onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks} />

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddingProject={handleAddProject} onCancellingAddingProject={handleCancelAddingProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content= <NoSelectedProject onAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleStartAddProject} projects={projectState.projects}
        onSelectProject={handleSelectingProject}  selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
