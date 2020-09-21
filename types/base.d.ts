import { ClientAPI } from "./client";
import { IterationAPI } from "./iteration";
import { PersonAPI } from "./person";
import { ProjectAPI } from "./project";
import { TagAPI } from "./tag";

export interface API extends ClientAPI, IterationAPI, PersonAPI, ProjectAPI, TagAPI {}

export declare class API implements API {
    constructor(kwargs?: object);
    load(): Promise<void>;
    info(): Promise<object>;
}
