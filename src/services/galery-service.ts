import { IGalery, Galery } from "@/domain/models/galery";
import { GaleryRepository } from "@/domain/service/galery-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class GaleryService {
    constructor(
        @inject(TYPES.GaleryRepository)
        private _repository: GaleryRepository
    ) {}

    public async get(): Promise<IGalery[]> {
        throw new Error("This data import from repository");
    }

    public async show(id: string): Promise<IGalery> {
        throw new Error("This data import from repository");
    }

    public async store(_galery: IGalery): Promise<IGalery> {
        // create need unmarshal ( return Desti.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(id: string, _galery: IGalery): Promise<IGalery> {
        // update need unmarshal ( return Desti.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(id: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IGalery>> {
        throw new Error("This data import from repository");
    }
}
