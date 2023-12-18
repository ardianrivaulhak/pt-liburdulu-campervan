import { UnitRepository } from "@/domain/service/unit-repository";
import { Unit as EntityUnit, IUnit } from "@/domain/models/unit";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class UnitSequelizeRepository implements UnitRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IUnit>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityUnit[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(id: string): Promise<EntityUnit> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(unitDomain: EntityUnit): Promise<EntityUnit> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(id: string, unitDomain: EntityUnit): Promise<EntityUnit> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(id: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
