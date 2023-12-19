import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { GaleryService } from "@/services/galery-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { getDataTableScheme } from "../validation/data-table-validation";
import {
    galeryDataTableScheme,
    galeryCreateScheme,
    galeryUpdateScheme,
} from "../validation/galery-validation";
@injectable()
export default class GaleryController {
    constructor(
        @inject(TYPES.GaleryService) private _galeryService: GaleryService
    ) {}

    public async get(req: Request, res: Response): Promise<Response> {
        const data = await this._galeryService.get();

        return res.status(200).send({
            message: "Success read data",
            data: data.map((val) => val),
        });
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const data = await this._galeryService.show(req.params.galeryId);
        return res.json({
            message: "Success read data",
            data: data,
        });
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const validatedReq = galeryCreateScheme.safeParse({
            ...req.body,
            imageUrl: req.file,
        });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const created = await this._galeryService.store(validatedReq.data);

        return res.json({
            message: "Success created data",
            data: created,
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const validatedReq = galeryUpdateScheme.safeParse({
            ...req.body,
            imageUrl: req.file,
        });

        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const updated = await this._galeryService.update(
            req.params.galeryId,
            validatedReq.data
        );

        return res.json({
            message: "Success updated data",
            data: updated,
        });
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        await this._galeryService.destroy(req.params.galeryId);

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

        const data = await this._galeryService.getDataTable(validatedReq.data);
        return res.json({
            message: "success",
            data: data,
        });
    }
}
