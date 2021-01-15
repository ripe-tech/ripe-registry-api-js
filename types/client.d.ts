import { Person } from "./person";
import { Project, ProjectCreate, ProjectPatch } from "./project";

export interface Options {
    readonly fields?: string[],
    readonly eager?: Boolean,
    readonly eagerL?: Boolean,
    readonly map?: Boolean,
    readonly rules?: Boolean,
    readonly meta?: Boolean,
    readonly build?: Boolean,
    readonly fill?: Boolean,
    readonly resolveA?: Boolean,
    readonly skip?: Number,
    readonly limit?: Number,
    readonly sort?: unknown[][],
    readonly raiseE?: Boolean,
}

export interface Client {
    readonly id: string;
    readonly name: string;
    readonly website: string;
    readonly accountManager: Person;
    readonly clientRepresentative: Person;
}

export interface ClientPatch {
    readonly website?: string;
    readonly accountManager?: Person;
    readonly clientRepresentative?: Person;
}

export interface ClientCreate {
    readonly name: string;
    readonly website?: string;
    readonly accountManager?: Person;
    readonly clientRepresentative?: Person;
}

export enum Status {
    opened = "opened",
    approved = "approved",
    rejected = "rejected"
}

export interface Iteration {
    readonly id?: string;
    readonly name: string;
    readonly fqn: string,
    readonly project: Project;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly description: string;
    readonly status: keyof typeof Status;
}

export interface IterationPatch {
    readonly owner?: Person;
    readonly reviewer?: Person;
    readonly description?: string;
}

export interface IterationCreate {
    readonly name: string;
    readonly owner: Person;
    readonly reviewer: Person;
    readonly description?: string;
}

export interface Review {
    readonly id?: string;
    readonly number: Number;
    readonly fqn: string;
    readonly comment: string;
    readonly status: keyof typeof Status;
    readonly iteration: string;
}

export interface ReviewPatch {
    readonly comment?: string;
    readonly status?: keyof typeof Status;
}

export interface ReviewCreate {
    readonly comment: string;
    readonly status: keyof typeof Status;
}

export declare class ClientAPI {
    listClients(options: Options): Client[];
    getClient(name: string): Client;
    createClient(payload: ClientCreate): Client;
    updateClient(name: string, payload: ClientPatch): Client;
    deleteClient(name: string): Client;

    listClientProjects(name: string, options: Options): Project[];
    getClientProject(name: string, project: string): Project;
    createClientProject(name: string, payload: ProjectCreate): Project;
    updateClientProject(name: string, project: string, payload: ProjectPatch): Project;
    deleteClientProject(name: string, project: string): Project;

    listProjectIterations(name: string, project: string, options: Options): Iteration[];
    getProjectIteration(name: string, project: string, iteration: string): Iteration;
    createProjectIteration(name: string, project: string, payload: IterationCreate): Iteration;
    updateProjectIteration(name: string, project: string, iteration: string, payload: IterationPatch): Iteration;
    deleteProjectIteration(name: string, project: string, iteration: string): Iteration;

    listIterationReviews(name: string, project: string, iteration: string, options: Options): Review[];
    getIterationReview(name: string, project: string, iteration: string, review: string): Review;
    createIterationReview(name: string, project: string, iteration: string, payload: ReviewCreate): Review;
    updateIterationReview(name: string, project: string, iteration: string, review: string, payload: ReviewPatch): Review;
    deleteIterationReview(name: string, project: string, iteration: string, review: string): Review;
}
