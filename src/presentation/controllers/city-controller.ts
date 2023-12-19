import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { CityService } from "@/services/city-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { getDataTableScheme } from "../validation/data-table-validation";
import {
    cityDataTableScheme,
    cityCreateScheme,
    cityUpdateScheme,
} from "../validation/city-validation";
@injectable()
export default class CityController {
    constructor(@inject(TYPES.CityService) private _cityService: CityService) {}

    public async get(req: Request, res: Response): Promise<Response> {
        const data = await this._cityService.get();

        return res.status(200).send({
            message: "Success read data",
            data: data.map((val) => val),
        });
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const user = await this._cityService.show(req.params.galeryId);
        return res.json({
            message: "Success read data",
            data: user,
        });
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const validatedReq = cityCreateScheme.safeParse({ ...req.body });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const created = await this._cityService.store(validatedReq.data);

        return res.json({
            message: "Success created data",
            data: created,
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const validatedReq = cityCreateScheme.safeParse({ ...req.body });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const updated = await this._cityService.update(
            req.params.id,
            validatedReq.data
        );

        return res.json({
            message: "Success updated data",
            data: updated,
        });
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        await this._cityService.destroy(req.params.id);

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

        const data = await this._cityService.getDataTable(validatedReq.data);
        return res.json({
            message: "Success Read Data",
            data: data,
        });
    }
}
