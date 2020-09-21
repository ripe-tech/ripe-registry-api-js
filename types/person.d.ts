export interface Options {
    readonly fields?: Array<string>,
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
    readonly sort?: Array<Object>,
    readonly raiseE?: Boolean,
}

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
    readonly name?: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
}

export interface PersonCreate {
    readonly email: string;
    readonly name: string;
    readonly company?: string;
    readonly position?: string;
    readonly phone?: string;
    readonly platformeId?: string;
}

export declare class PersonAPI {
    listPersons(options: Options): Array<Person>
    getPerson(email: string): Person;
    createPerson(payload: PersonCreate): Person;
    updatePerson(email: string, payload: PersonPatch): Person;
    deletePerson(email: string): Person;
}
