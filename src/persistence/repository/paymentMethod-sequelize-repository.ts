import { PaymentMethodRepository } from "@/domain/service/paymentMethod-repository";
import {
    PaymentMethod as EntitypaymentMethod,
    IPaymentMethod,
} from "@/domain/models/paymentMethod";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class PaymentMethodSequelizeRepository
    implements PaymentMethodRepository
{
    async getDataTable(
        param: TDataTableParam
    ): Promise<TableData<IPaymentMethod>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntitypaymentMethod[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(paymentMethodId: string): Promise<EntitypaymentMethod> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(
        paymentMethodDomain: EntitypaymentMethod
    ): Promise<EntitypaymentMethod> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        paymentMethodId: string,
        paymentMethodDomain: EntitypaymentMethod
    ): Promise<EntitypaymentMethod> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(paymentMethodId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
