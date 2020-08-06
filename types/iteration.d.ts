import { Person } from "./person";
import { Project } from "./project";

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
    readonly id?: string;
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
    readonly id?: string;
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



export declare class IterationAPI {
    listIterations(): Array<Iteration>;
    getIteration(id: string): Iteration;
    createIteration(payload: IterationCreate): Iteration;
    updateIteration(id: string, payload: IterationPatch): Iteration;
    deleteIteration(id: string): Iteration;
}
