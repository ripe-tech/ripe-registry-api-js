export interface API {}

export declare class API implements API {
    constructor(kwargs?: object);
    load(): Promise<void>;
    info(): Promise<object>;
}
