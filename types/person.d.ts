import { APIOptions } from "yonius";

export interface Person {
    readonly id: string;
    readonly email: string;
    readonly name: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface PersonPatch {
    readonly name?: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
}

export interface PersonCreate {
    readonly id?: number;
    readonly email: string;
    readonly name: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class PersonAPI {
    listPersons(options?: APIOptions): Person[];
    getPerson(email: string): Person;
    createPerson(payload: PersonCreate): Person;
    updatePerson(email: string, payload: PersonPatch): Person;
    deletePerson(email: string): Person;
}
