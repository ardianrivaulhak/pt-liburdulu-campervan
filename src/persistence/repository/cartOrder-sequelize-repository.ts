import { CartOrderRepository } from "@/domain/service/cartOrder-repository";
import {
    CartOrder as EntityCartOrder,
    ICartOrder,
} from "@/domain/models/cartOrder";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class CartOrderSequelizeRepository implements CartOrderRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<ICartOrder>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityCartOrder[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(cartOrderId: string): Promise<EntityCartOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(cartOrderDomain: EntityCartOrder): Promise<EntityCartOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        cartOrderId: string,
        cartOrderDomain: EntityCartOrder
    ): Promise<EntityCartOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(cartOrderId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
