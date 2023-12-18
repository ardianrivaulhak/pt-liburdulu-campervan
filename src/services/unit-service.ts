import { IUnit, Unit } from "@/domain/models/unit";
import { UnitRepository } from "@/domain/service/unit-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class UnitService {
    constructor(
        @inject(TYPES.UnitRepository) private _repository: UnitRepository
    ) {}

    public async get(): Promise<IUnit[]> {
        throw new Error("This data import from repository");
    }

    public async show(id: string): Promise<IUnit> {
        throw new Error("This data import from repository");
    }

    public async store(_unit: IUnit): Promise<IUnit> {
        // create need unmarshal ( return Unit.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(id: string, _unit: IUnit): Promise<IUnit> {
        // update need unmarshal ( return Unit.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(id: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IUnit>> {
        throw new Error("This data import from repository");
    }
}
