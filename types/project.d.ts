import { Client } from "./client";
import { Person } from "./person";

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

export interface Project {
    readonly id?: string;
    readonly name: string;
    readonly description: string;
    readonly fqn: string;
    readonly client: Client;
    readonly manager: Person;
}

export interface ProjectPatch {
    readonly description?: string;
    readonly manager?: Person;
}

export interface ProjectCreate {
    readonly name: string;
    readonly description?: string;
    readonly manager?: Person;
}

export declare class ProjectAPI {
    listProjects(options: Options): Project[]
}
