import { ICity, City } from "@/domain/models/city";
import { CityRepository } from "@/domain/service/city-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class CityService {
    constructor(
        @inject(TYPES.CityRepository) private _repository: CityRepository
    ) {}

    public async get(): Promise<ICity[]> {
        throw new Error("This data import from repository");
    }

    public async show(id: string): Promise<ICity> {
        throw new Error("This data import from repository");
    }

    public async store(_city: ICity): Promise<ICity> {
        // create need unmarshal ( return city.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(id: string, _city: ICity): Promise<ICity> {
        // update need unmarshal ( return city.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(id: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<ICity>> {
        throw new Error("This data import from repository");
    }
}
