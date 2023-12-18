import { PickPointRepository } from "@/domain/service/pickPoint-repository";
import {
    PickPoint as EntityPickPoint,
    IPickPoint,
} from "@/domain/models/pickPoint";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class PickPointSequelizeRepository implements PickPointRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IPickPoint>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityPickPoint[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(pickPointId: string): Promise<EntityPickPoint> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(pickPointDomain: EntityPickPoint): Promise<EntityPickPoint> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        pickPointId: string,
        pickPointDomain: EntityPickPoint
    ): Promise<EntityPickPoint> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(pickPointId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
