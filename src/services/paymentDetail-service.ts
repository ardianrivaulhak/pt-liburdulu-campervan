import { IPaymentDetail, PaymentDetail } from "@/domain/models/paymentDetail";
import { PaymentDetailRepository } from "@/domain/service/paymentDetail-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class PaymentDetailService {
    constructor(
        @inject(TYPES.PaymentDetailRepository)
        private _repository: PaymentDetailRepository
    ) {}

    public async get(): Promise<IPaymentDetail[]> {
        throw new Error("This data import from repository");
    }

    public async show(paymentDetailId: string): Promise<IPaymentDetail> {
        throw new Error("This data import from repository");
    }

    public async store(
        _paymentDetail: IPaymentDetail
    ): Promise<IPaymentDetail> {
        // create need unmarshal ( return PaymentDetail.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        paymentDetailId: string,
        _paymentDetail: IPaymentDetail
    ): Promise<IPaymentDetail> {
        // update need unmarshal ( return PaymentDetail.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(paymentDetailId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IPaymentDetail>> {
        throw new Error("This data import from repository");
    }
}
