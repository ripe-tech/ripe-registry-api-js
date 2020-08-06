import { Person } from "./person";
import { Project } from "./project";

export interface Client {
    readonly id?: string;
    readonly name: string;
    readonly website: string;
    readonly accountManager: Person;
    readonly clientRepresentative: Person;
}

export declare class ClientAPI {
    listClients(): Array<Client>;
    getClient(name: string): Client;
    createClient(payload: Client): Client;
    updateClient(name: string, payload: object): Client;
    deleteClient(name: string): Client;
    listClientProjects(name: string): Array<Project>;
}
