import { ICar, Car } from "@/domain/models/car";
import { CarRepository } from "@/domain/service/car-repository";
import { TYPES } from "../types";
import { inject, injectable } from "inversify";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
// import { FileSystem } from "@/infrastructure/file-system";
import "reflect-metadata";

@injectable()
export class CarService {
    constructor(
        @inject(TYPES.CarRepository) private _repository: CarRepository
    ) {}

    public async get(): Promise<ICar[]> {
        throw new Error("This data import from repository");
    }

    public async show(carId: string): Promise<ICar> {
        throw new Error("This data import from repository");
    }

    public async store(_car: ICar): Promise<ICar> {
        // create need unmarshal ( return Car.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(carId: string, _car: ICar): Promise<ICar> {
        // update need unmarshal ( return Car.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(carId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<ICar>> {
        throw new Error("This data import from repository");
    }
}
