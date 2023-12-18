import { DestinationRepository } from "@/domain/service/destination-repository";
import {
    Destination as EntityDestination,
    IDestination,
} from "@/domain/models/destination";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class DestinationSequelizeRepository implements DestinationRepository {
    async getDataTable(
        param: TDataTableParam
    ): Promise<TableData<IDestination>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityDestination[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(id: string): Promise<EntityDestination> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(
        destinationDomain: EntityDestination
    ): Promise<EntityDestination> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        id: string,
        destinationDomain: EntityDestination
    ): Promise<EntityDestination> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(id: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
