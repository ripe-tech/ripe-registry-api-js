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

export interface Tag {
    readonly id?: string;
    readonly name: string;
    readonly description: string;
    readonly color: string;
}

export interface TagPatch {
    readonly description?: string;
    readonly color?: Person;
}

export interface TagCreate {
    readonly name: string;
    readonly description?: string;
    readonly color?: string;
}

export declare class TagAPI {
    listTags(options: Options): Array<Tag>
    getTag(name: string): Tag
    createTag(payload: TagCreate): Tag
    updateTag(payload: TagPatch): Tag
    deleteTag(name: string): Tag
}