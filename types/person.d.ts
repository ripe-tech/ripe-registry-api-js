import { Client } from "./client";
import { Project } from "./project";

export interface Person {
    readonly id: string;
    readonly email: string;
    readonly name: string;
    readonly company: string;
    readonly position: string;
    readonly phone: string;
    readonly platformeId: string;
}

export declare class PersonAPI {
    getPersons(): Array<Person>
    getPerson(email: string): Person;
    createPerson(body: object): Person;
    updatePerson(email: string, body: object): Person;
    deletePerson(email:string): Person;
    getPersonProjects(email: string): Array<Project>;
    getPersonClients(email: string): Array<Client>;
}
