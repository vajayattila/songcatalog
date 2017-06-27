export class partVersionType{
    partName: string;
    version: string;
}

export class moduleVersionType{
    moduleName : string;
    parts: Array<partVersionType>;
}

export class versionsType{
    versions : Array<moduleVersionType>;
}