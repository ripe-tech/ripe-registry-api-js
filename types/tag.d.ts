import { Options } from "./options";

export interface Tag {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly color?: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface TagPatch {
    readonly description?: string;
    readonly color?: string;
}

export interface TagCreate {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly color?: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export declare class TagAPI {
    listTags(options?: Options): Tag[]
    createTag(payload: TagCreate): Tag
    getTag(name: string): Tag
    updateTag(payload: TagPatch): Tag
    deleteTag(name: string): Tag
}
