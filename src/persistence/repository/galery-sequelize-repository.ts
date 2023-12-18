import { GaleryRepository } from "@/domain/service/galery-repository";
import { Galery as EntityGalery, IGalery } from "@/domain/models/galery";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class GalerySequelizeRepository implements GaleryRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IGalery>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityGalery[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(id: string): Promise<EntityGalery> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(galeryDomain: EntityGalery): Promise<EntityGalery> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        id: string,
        galeryDomain: EntityGalery
    ): Promise<EntityGalery> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(id: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
