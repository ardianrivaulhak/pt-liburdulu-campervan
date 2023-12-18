import { ITrip, Trip } from "@/domain/models/trip";
import { TripRepository } from "@/domain/service/trip-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class TripService {
    constructor(
        @inject(TYPES.TripRepository)
        private _repository: TripRepository
    ) {}

    public async get(): Promise<ITrip[]> {
        throw new Error("This data import from repository");
    }

    public async show(tripId: string): Promise<ITrip> {
        throw new Error("This data import from repository");
    }

    public async store(_trip: ITrip): Promise<ITrip> {
        // create need unmarshal ( return city.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(tripId: string, _trip: ITrip): Promise<ITrip> {
        // update need unmarshal ( return city.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(tripId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<ITrip>> {
        throw new Error("This data import from repository");
    }
}
