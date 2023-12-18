import { AttributeRepository } from "@/domain/service/attribute-repository";
import {
    Attribute as EntityAttribute,
    IAttribute,
} from "@/domain/models/attribute";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class AttributeSequelizeRepository implements AttributeRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IAttribute>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityAttribute[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(attributeId: string): Promise<EntityAttribute> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(attributeDomain: EntityAttribute): Promise<EntityAttribute> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        attributeId: string,
        attributeDomain: EntityAttribute
    ): Promise<EntityAttribute> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(attributeId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
