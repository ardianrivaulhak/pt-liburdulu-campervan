import { TDataTableParam } from "@/domain/service/types";
import { IPaymentDetail, PaymentDetail } from "../models/paymentDetail";
import { TableData } from "../models/table-data";

export interface PaymentDetailRepository {
    get(): Promise<PaymentDetail[]>;
    show(paymentDetailId: string): Promise<PaymentDetail>;
    getDataTable(param: TDataTableParam): Promise<TableData<IPaymentDetail>>;
    store(_paymentDetail: IPaymentDetail): Promise<PaymentDetail>;
    update(
        paymentDetailId: string,
        _paymentDetail: IPaymentDetail
    ): Promise<PaymentDetail>;
    destroy(paymentDetailId: string): Promise<boolean>;
}
