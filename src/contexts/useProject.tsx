"use cliente"

import Project from "@/types/Project"
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContexProps {
    project: Project | null;
    setProject(project: Project | null): void;
}

const ProjectContext = createContext<ContexProps | null> (null);

export default function useProject() {
    const context = useContext(ProjectContext)

    if (!context) {
        throw new Error("Please use ProjectProvider in parent component");
    }
    
    return context    
}

export function ProjectProvider({ children } : PropsWithChildren) {
    const [project, setProject] = useState<Project | null>(null);

    return (
      <ProjectContext.Provider value={{ project, setProject }}>
        {children}
      </ProjectContext.Provider>
    );  
}