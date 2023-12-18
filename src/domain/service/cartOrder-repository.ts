import { TDataTableParam } from "@/domain/service/types";
import { ICartOrder, CartOrder } from "../models/cartOrder";
import { TableData } from "../models/table-data";

export interface CartOrderRepository {
    get(): Promise<CartOrder[]>;
    show(cartOrderId: string): Promise<CartOrder>;
    getDataTable(param: TDataTableParam): Promise<TableData<ICartOrder>>;
    store(_cartOrder: ICartOrder): Promise<CartOrder>;
    update(cartOrderId: string, _cartOrder: ICartOrder): Promise<CartOrder>;
    destroy(cartOrderId: string): Promise<boolean>;
}
