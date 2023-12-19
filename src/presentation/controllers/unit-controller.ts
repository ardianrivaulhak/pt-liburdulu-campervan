import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { UnitService } from "@/services/unit-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { getDataTableScheme } from "../validation/data-table-validation";
import {
    unitDataTableScheme,
    unitCreateScheme,
    unitUpdateScheme,
} from "../validation/unit-validation";
@injectable()
export default class UnitController {
    constructor(@inject(TYPES.UnitService) private _unitService: UnitService) {}

    public async get(req: Request, res: Response): Promise<Response> {
        const data = await this._unitService.get();

        return res.status(200).send({
            message: "Success read data",
            data: data.map((val) => val),
        });
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const data = await this._unitService.show(req.params.unitId);
        return res.json({
            message: "Success read data",
            data: data,
        });
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const validatedReq = unitCreateScheme.safeParse({ ...req.body });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const created = await this._unitService.store(req.body);

        return res.json({
            message: "Success created data",
            data: created,
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const validatedReq = unitUpdateScheme.safeParse({ ...req.body });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const updated = await this._unitService.update(
            req.params.unitId,
            validatedReq.data
        );

        return res.json({
            message: "Success updated data",
            data: updated,
        });
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        await this._unitService.destroy(req.params.unitId);

        return res.json({
            message: "Data has been deleted",
        });
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

        const data = await this._unitService.getDataTable(validatedReq.data);
        return res.json({
            message: "success",
            data: data,
        });
    }
}
