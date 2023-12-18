import { IOrder, Order } from "@/domain/models/order";
import { OrderRepository } from "@/domain/service/order-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class OrderService {
    constructor(
        @inject(TYPES.OrderRepository) private _repository: OrderRepository
    ) {}

    public async get(): Promise<IOrder[]> {
        throw new Error("This data import from repository");
    }

    public async show(orderId: string): Promise<IOrder> {
        throw new Error("This data import from repository");
    }

    public async store(_order: IOrder): Promise<IOrder> {
        // create need unmarshal ( return Order.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(orderId: string, _order: IOrder): Promise<IOrder> {
        // update need unmarshal ( return Order.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(orderId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IOrder>> {
        throw new Error("This data import from repository");
    }
}
