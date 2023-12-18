import { ICartOrder, CartOrder } from "@/domain/models/cartOrder";
import { CartOrderRepository } from "@/domain/service/cartOrder-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class CartOrderService {
    constructor(
        @inject(TYPES.CartOrderRepository)
        private _repository: CartOrderRepository
    ) {}

    public async get(): Promise<ICartOrder[]> {
        throw new Error("This data import from repository");
    }

    public async show(cartOrderId: string): Promise<ICartOrder> {
        throw new Error("This data import from repository");
    }

    public async store(_cartOrder: ICartOrder): Promise<ICartOrder> {
        // create need unmarshal ( return CartOrder.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        cartOrderId: string,
        _cartOrder: ICartOrder
    ): Promise<ICartOrder> {
        // update need unmarshal ( return CartOrder.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(cartOrderId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<ICartOrder>> {
        throw new Error("This data import from repository");
    }
}
