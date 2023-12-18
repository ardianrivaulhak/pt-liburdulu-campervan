import { TDataTableParam } from "@/domain/service/types";
import { IOrder, Order } from "../models/order";
import { TableData } from "../models/table-data";

export interface OrderRepository {
    get(): Promise<Order[]>;
    show(orderId: string): Promise<Order>;
    getDataTable(param: TDataTableParam): Promise<TableData<IOrder>>;
    store(_order: IOrder): Promise<Order>;
    update(orderId: string, _order: IOrder): Promise<Order>;
    destroy(orderId: string): Promise<boolean>;
}
