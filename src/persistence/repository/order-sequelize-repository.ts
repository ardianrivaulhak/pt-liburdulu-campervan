import { OrderRepository } from "@/domain/service/order-repository";
import { Order as EntityOrder, IOrder } from "@/domain/models/order";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class OrderSequelizeRepository implements OrderRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IOrder>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityOrder[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(orderId: string): Promise<EntityOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(OrderDomain: EntityOrder): Promise<EntityOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        orderId: string,
        OrderDomain: EntityOrder
    ): Promise<EntityOrder> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(orderId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
