import { CarRepository } from "@/domain/service/car-repository";
import { Car as EntityCar, ICar } from "@/domain/models/car";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class CarSequelizeRepository implements CarRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<ICar>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityCar[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(carId: string): Promise<EntityCar> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(CarDomain: EntityCar): Promise<EntityCar> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(carId: string, CarDomain: EntityCar): Promise<EntityCar> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(carId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
