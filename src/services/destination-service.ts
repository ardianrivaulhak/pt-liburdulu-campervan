import { IDestination, Destination } from "@/domain/models/destination";
import { DestinationRepository } from "@/domain/service/destination-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class DestinationService {
    constructor(
        @inject(TYPES.DestinationRepository)
        private _repository: DestinationRepository
    ) {}

    public async get(): Promise<IDestination[]> {
        throw new Error("This data import from repository");
    }

    public async show(id: string): Promise<IDestination> {
        throw new Error("This data import from repository");
    }

    public async store(_destination: IDestination): Promise<IDestination> {
        // create need unmarshal ( return Desti.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        id: string,
        _destination: IDestination
    ): Promise<IDestination> {
        // update need unmarshal ( return Desti.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(id: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IDestination>> {
        throw new Error("This data import from repository");
    }
}
