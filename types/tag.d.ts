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
    listTags(options: Options): Tag[]
    getTag(name: string): Tag
    createTag(payload: TagCreate): Tag
    updateTag(payload: TagPatch): Tag
    deleteTag(name: string): Tag
}
