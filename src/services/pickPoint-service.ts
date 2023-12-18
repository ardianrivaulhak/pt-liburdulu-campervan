import { IPickPoint, PickPoint } from "@/domain/models/pickPoint";
import { PickPointRepository } from "@/domain/service/pickPoint-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class PickPointService {
    constructor(
        @inject(TYPES.PickPointRepository)
        private _repository: PickPointRepository
    ) {}

    public async get(): Promise<IPickPoint[]> {
        throw new Error("This data import from repository");
    }

    public async show(pickPointId: string): Promise<IPickPoint> {
        throw new Error("This data import from repository");
    }

    public async store(_pickPoint: IPickPoint): Promise<IPickPoint> {
        // create need unmarshal ( return PickPoint.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        pickPointId: string,
        _pickPoint: IPickPoint
    ): Promise<IPickPoint> {
        // update need unmarshal ( return PickPoint.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(pickPointId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IPickPoint>> {
        throw new Error("This data import from repository");
    }
}
