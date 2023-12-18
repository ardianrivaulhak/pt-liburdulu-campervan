import { IPaymentMethod, PaymentMethod } from "@/domain/models/paymentMethod";
import { PaymentMethodRepository } from "@/domain/service/paymentMethod-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class PaymentMethodService {
    constructor(
        @inject(TYPES.PaymentMethodRepository)
        private _repository: PaymentMethodRepository
    ) {}

    public async get(): Promise<IPaymentMethod[]> {
        throw new Error("This data import from repository");
    }

    public async show(paymentMethodId: string): Promise<IPaymentMethod> {
        throw new Error("This data import from repository");
    }

    public async store(
        _paymentMethod: IPaymentMethod
    ): Promise<IPaymentMethod> {
        // create need unmarshal ( return PaymentMethod.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        paymentMethodId: string,
        _paymentMethod: IPaymentMethod
    ): Promise<IPaymentMethod> {
        // update need unmarshal ( return PaymentMethod.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(paymentMethodId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IPaymentMethod>> {
        throw new Error("This data import from repository");
    }
}
