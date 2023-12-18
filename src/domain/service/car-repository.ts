import { TDataTableParam } from "@/domain/service/types";
import { ICar, Car } from "../models/car";
import { TableData } from "../models/table-data";

export interface CarRepository {
    get(): Promise<Car[]>;
    show(carId: string): Promise<Car>;
    getDataTable(param: TDataTableParam): Promise<TableData<ICar>>;
    store(_car: ICar): Promise<Car>;
    update(carId: string, _car: ICar): Promise<Car>;
    destroy(carId: string): Promise<boolean>;
}
