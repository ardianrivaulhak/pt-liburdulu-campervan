import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { PaymentMethodService } from "@/services/paymentMethod-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { getDataTableScheme } from "../validation/data-table-validation";

@injectable()
export default class PaymentMethodController {
    constructor(
        @inject(TYPES.PaymentMethodService)
        private _PaymentMethodService: PaymentMethodService
    ) {}

    public async get(req: Request, res: Response): Promise<Response> {
        //need validation at presentaion/validation
        return res.status(200).send("this function need import from service");
        //     .send({ message: "success", data: cities.map((val) => val) });
    }

    public async show(req: Request, res: Response): Promise<Response> {
        //need validation at presentaion/validation
        return res.status(200).send("this function need import from service");
    }

    public async store(req: Request, res: Response): Promise<Response> {
        //need validation at presentaion/validation
        return res.status(200).send("this function need import from service");
    }

    public async update(req: Request, res: Response): Promise<Response> {
        //need validation at presentaion/validation
        return res.status(200).send("this function need import from service");
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        return res.status(200).send("this function need import from service");
    }

    public async getDataTable(req: Request, res: Response): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const data = await this._PaymentMethodService.getDataTable(
            validatedReq.data
        );
        return res.json({
            message: "success",
            data: data,
        });
    }
}
