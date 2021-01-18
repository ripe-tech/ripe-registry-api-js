import { Client } from "./client";
import { Options } from "./options";
import { Person } from "./person";

export interface Project {
    readonly id?: string;
    readonly name: string;
    readonly fqn: string;
    readonly description?: string;
    readonly client: string;
    readonly manager?: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ProjectPatch {
    readonly description?: string;
    readonly manager?: string;
}

export interface ProjectCreate {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly client?: string;
    readonly manager?: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class ProjectAPI {
    listProjects(options: Options): Project[]
}
