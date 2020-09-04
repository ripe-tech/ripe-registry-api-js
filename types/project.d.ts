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

export enum Status {
    opened = "opened",
    approved = "approved",
    rejected = "rejected"
}

export interface Iteration {
    readonly id?: string;
    readonly name: string;
    readonly project: Project;
    readonly number: number;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly description: string;
    readonly tags: Array<string>;
    readonly files: Array<string>;
    readonly messages: Array<string>;
    readonly created: number;
    readonly status: keyof typeof Status;
}

export interface IterationPatch {
    readonly name?: string;
    readonly project?: Project;
    readonly number?: number;
    readonly owner?: Person;
    readonly reviewer?: Person;
    readonly description?: string;
    readonly tags?: Array<string>;
    readonly files?: Array<string>;
    readonly messages?: Array<string>;
    readonly created?: number;
    readonly status?: keyof typeof Status;
}

export interface IterationCreate {
    readonly name: string;
    readonly project: Project;
    readonly number?: number;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly description?: string;
    readonly tags?: Array<string>;
    readonly files?: Array<string>;
    readonly messages?: Array<string>;
    readonly created?: number;
    readonly status?: keyof typeof Status;
}

export declare class ProjectAPI {
    listProjects(): Array<Project>
    getProject(name: string): Project;
    createProject(payload: ProjectCreate): Project;
    updateProject(name: string, payload: ProjectPatch): Project;
    deleteProject(name: string): Project;
    listIterationsProject(name: string): Array<Iteration>;
    getIterationProject(name: string): Iteration;
    getIteration(id: string): Iteration;
    createIterationProject(payload: IterationCreate): Iteration;
    updateIterationProject(id: string, payload: IterationPatch): Iteration;
    deleteIterationProject(id: string): Iteration;
}
