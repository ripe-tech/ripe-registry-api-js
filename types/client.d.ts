import { Options } from "./options";
import { Person } from "./person";
import { Project, ProjectCreate, ProjectPatch } from "./project";

export interface Client {
    readonly id: string;
    readonly name: string;
    readonly website?: string;
    readonly accountManager?: Person;
    readonly clientRepresentative?: Person;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ClientPatch {
    readonly website?: string;
    readonly accountManager?: Person;
    readonly clientRepresentative?: Person;
}

export interface ClientCreate {
    readonly id?: string;
    readonly name: string;
    readonly website?: string;
    readonly accountManager?: Person;
    readonly clientRepresentative?: Person;
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
    readonly project: Project;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly status: keyof typeof Status;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface IterationPatch {
    readonly description?: string;
    readonly owner?: Person;
    readonly reviewer?: Person;
    readonly status?: keyof typeof Status;
}

export interface IterationCreate {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly project?: Project;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly status?: keyof typeof Status;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface Review {
    readonly id: string;
    readonly number: Number;
    readonly fqn: string;
    readonly comment: string;
    readonly iteration: Iteration;
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
    readonly iteration?: Iteration;
    readonly status?: keyof typeof Status;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class ClientAPI {
    listClients(options: Options): Client[];
    getClient(name: string): Client;
    createClient(payload: ClientCreate): Client;
    updateClient(name: string, payload: ClientPatch): Client;
    deleteClient(name: string): void;

    listClientProjects(name: string, options: Options): Project[];
    getClientProject(name: string, project: string): Project;
    createClientProject(name: string, payload: ProjectCreate): Project;
    updateClientProject(name: string, project: string, payload: ProjectPatch): Project;
    deleteClientProject(name: string, project: string): void;

    listProjectIterations(name: string, project: string, options: Options): Iteration[];
    getProjectIteration(name: string, project: string, iteration: string): Iteration;
    createProjectIteration(name: string, project: string, payload: IterationCreate): Iteration;
    updateProjectIteration(name: string, project: string, iteration: string, payload: IterationPatch): Iteration;
    deleteProjectIteration(name: string, project: string, iteration: string): void;

    listIterationReviews(name: string, project: string, iteration: string, options: Options): Review[];
    getIterationReview(name: string, project: string, iteration: string, review: number): Review;
    createIterationReview(name: string, project: string, iteration: string, payload: ReviewCreate): Review;
    updateIterationReview(name: string, project: string, iteration: string, review: number, payload: ReviewPatch): Review;
    deleteIterationReview(name: string, project: string, iteration: string, review: number): void;
}
