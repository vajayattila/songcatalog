export class partVersionType{
    partName: string;
    version: string;
}

export class moduleVersionType{
    moduleName : string;
    parts: Array<partVersionType>;
}

export class versionsResponseType{
    status: string;
    statuscode: number;
    versions : Array<moduleVersionType>;
}
