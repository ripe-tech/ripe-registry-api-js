import { Options } from "./options";
import { Project, ProjectCreate, ProjectPatch } from "./project";

export interface Client {
    readonly id: string;
    readonly name: string;
    readonly website?: string;
    readonly accountManager?: string;
    readonly clientRepresentative?: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ClientPatch {
    readonly website?: string;
    readonly accountManager?: string;
    readonly clientRepresentative?: string;
}

export interface ClientCreate {
    readonly id?: string;
    readonly name: string;
    readonly website?: string;
    readonly accountManager?: string;
    readonly clientRepresentative?: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export enum Status {
    opened = "opened",
    approved = "approved",
    rejected = "rejected"
}

export interface Iteration {
    readonly id: string;
    readonly name: string;
    readonly fqn: string,
    readonly description?: string;
    readonly project: string;
    readonly owner: string;
    readonly reviewer: string;
    readonly status: keyof typeof Status;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface IterationPatch {
    readonly description?: string;
    readonly owner?: string;
    readonly reviewer?: string;
    readonly status?: keyof typeof Status;
}

export interface IterationCreate {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly project: string;
    readonly owner: string;
    readonly reviewer: string;
    readonly status?: keyof typeof Status;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface Review {
    readonly id: string;
    readonly number: number;
    readonly fqn: string;
    readonly comment: string;
    readonly iteration: string;
    readonly status: keyof typeof Status;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ReviewPatch {
    readonly comment?: string;
    readonly status?: keyof typeof Status;
}

export interface ReviewCreate {
    readonly id?: string;
    readonly comment: string;
    readonly iteration: string;
    readonly status?: keyof typeof Status;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class ClientAPI {
    listClients(options?: Options): Client[];
    createClient(payload: ClientCreate): Client;
    getClient(name: string): Client;
    updateClient(name: string, payload: ClientPatch): Client;
    deleteClient(name: string): void;

    listProjectsClient(name: string, options?: Options): Project[];
    createProjectClient(name: string, payload: ProjectCreate): Project;
    getProjectClient(name: string, project: string): Project;
    updateProjectClient(name: string, project: string, payload: ProjectPatch): Project;
    deleteProjectClient(name: string, project: string): void;

    listIterationsProject(name: string, project: string, options?: Options): Iteration[];
    createIterationProject(name: string, project: string, payload: IterationCreate): Iteration;
    getIterationProject(name: string, project: string, iteration: string): Iteration;
    updateIterationProject(name: string, project: string, iteration: string, payload: IterationPatch): Iteration;
    deleteIterationProject(name: string, project: string, iteration: string): void;

    listReviewsIteration(name: string, project: string, iteration: string, options?: Options): Review[];
    createReviewIteration(name: string, project: string, iteration: string, payload: ReviewCreate): Review;
    getReviewIteration(name: string, project: string, iteration: string, review: number): Review;
    updateReviewIteration(name: string, project: string, iteration: string, review: number, payload: ReviewPatch): Review;
    deleteReviewIteration(name: string, project: string, iteration: string, review: number): void;
}
