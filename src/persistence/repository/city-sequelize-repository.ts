import { CityRepository } from "@/domain/service/city-repository";
import { City as EntityCity, ICity } from "@/domain/models/city";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class CitySequelizeRepository implements CityRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<ICity>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityCity[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(id: string): Promise<EntityCity> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(cityDomain: EntityCity): Promise<EntityCity> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(id: string, cityDomain: EntityCity): Promise<EntityCity> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(id: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
