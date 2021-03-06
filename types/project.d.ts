import { APIOptions } from "yonius";

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
    readonly client: string;
    readonly manager?: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class ProjectAPI {
    listProjects(options?: APIOptions): Promise<Project[]>;
}
