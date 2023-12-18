import { TDataTableParam } from "@/domain/service/types";
import { IPaymentMethod, PaymentMethod } from "../models/paymentMethod";
import { TableData } from "../models/table-data";

export interface PaymentMethodRepository {
    get(): Promise<PaymentMethod[]>;
    show(paymentMethodId: string): Promise<PaymentMethod>;
    getDataTable(param: TDataTableParam): Promise<TableData<IPaymentMethod>>;
    store(_paymentMethod: IPaymentMethod): Promise<PaymentMethod>;
    update(
        paymentMethodId: string,
        _paymentMethod: IPaymentMethod
    ): Promise<PaymentMethod>;
    destroy(paymentMethodId: string): Promise<boolean>;
}
