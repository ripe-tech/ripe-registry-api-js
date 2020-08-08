import { Person } from "./person";
import { Project } from "./project";

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

export declare class ClientAPI {
    listClients(): Array<Client>;
    getClient(name: string): Client;
    createClient(payload: ClientCreate): Client;
    updateClient(name: string, payload: ClientPatch): Client;
    deleteClient(name: string): Client;
    listClientProjects(name: string): Array<Project>;
}
