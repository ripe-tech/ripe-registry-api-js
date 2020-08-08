import { Client } from "./client";
import { Iteration } from "./iteration";
import { Person } from "./person";

export interface Project {
    readonly id?: string;
    readonly name: string;
    readonly description: string;
    readonly client: Client;
    readonly manager: Person;
}

export interface ProjectPatch {
    readonly description?: string;
    readonly client?: Client;
    readonly manager?: Person;
}

export interface ProjectCreate {
    readonly name: string;
    readonly description?: string;
    readonly client?: Client;
    readonly manager?: Person;
}

export declare class ProjectAPI {
    listProjects(): Array<Project>
    getProject(name: string): Project;
    createProject(payload: ProjectCreate): Project;
    updateProject(name: string, payload: ProjectPatch): Project;
    deleteProject(name: string): Project;
    listProjectIterations(name: string): Array<Iteration>;
}
