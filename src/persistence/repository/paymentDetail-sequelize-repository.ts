import { PaymentDetailRepository } from "@/domain/service/paymentDetail-repository";
import {
    PaymentDetail as EntityPaymentDetail,
    IPaymentDetail,
} from "@/domain/models/paymentDetail";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class PaymentDetailSequelizeRepository
    implements PaymentDetailRepository
{
    async getDataTable(
        param: TDataTableParam
    ): Promise<TableData<IPaymentDetail>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityPaymentDetail[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(paymentDetailId: string): Promise<EntityPaymentDetail> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(
        paymentDetailDomain: EntityPaymentDetail
    ): Promise<EntityPaymentDetail> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(
        paymentDetailId: string,
        paymentDetailDomain: EntityPaymentDetail
    ): Promise<EntityPaymentDetail> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(paymentDetailId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
