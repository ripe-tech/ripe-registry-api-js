import { Client } from "./client";
import { Project } from "./project";

export interface Person {
    readonly id?: string;
    readonly email: string;
    readonly name: string;
    readonly company: string;
    readonly position: string;
    readonly phone: string;
    readonly platformeId: string;
}

export interface PersonPatch {
    readonly id?: string;
    readonly email?: string;
    readonly name?: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
}

export interface PersonCreate {
    readonly id?: string;
    readonly email: string;
    readonly name: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
}

export declare class PersonAPI {
    listPersons(): Array<Person>
    getPerson(email: string): Person;
    createPerson(payload: PersonCreate): Person;
    updatePerson(email: string, payload: PersonPatch): Person;
    deletePerson(email: string): Person;
    listPersonProjects(email: string): Array<Project>;
    listPersonClients(email: string): Array<Client>;
}
