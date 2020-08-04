import { Client } from "./client";
import { Iteration } from "./iteration";
import { Person } from "./person";

export interface Project {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly client: Client;
    readonly manager: Person;
}

export declare class ProjectAPI {
    listProjects(): Array<Project>
    getProject(name: string): Project;
    createProject(body: object): Project;
    updateProject(name: string, body: object): Project;
    deleteProject(name: string): Project;
    listProjectIterations(name: string): Array<Iteration>;
}
