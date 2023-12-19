import { GaleryRepository } from "@/domain/service/galery-repository";
import { Galery as EntityGalery, IGalery } from "@/domain/models/galery";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";
import { Galery, Unit } from "@/infrastructure/database/models";

@injectable()
export class GalerySequelizeRepository implements GaleryRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IGalery>> {
        const data = await Galery.findAll({
            where: {
                imageUrl: {
                    [Op.iLike]: `%${param.search || ""}%`,
                },
            },
            limit: param.limit ? param.limit : undefined,
            offset:
                (param.page || 1) > 1
                    ? (param.limit || 10) * ((param.page || 1) - 1)
                    : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: data.map((el) => ({
                id: el.id,
                imageUrl: el.imageUrl,
                unitId: el.unitId,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at || undefined,
            })),
        });
    }
    async get(): Promise<EntityGalery[]> {
        const data = await Galery.findAll({
            attributes: ["id", "imageUrl"],
        });

        return data.map((el) =>
            EntityGalery.create({
                id: el.id,
                imageUrl: el.imageUrl,
                unitId: el.unitId,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })
        );
    }

    async show(galeryId: string): Promise<EntityGalery> {
        const data = await Galery.findByPk(galeryId);
        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        return EntityGalery.create({
            id: data.id,
            imageUrl: data.imageUrl,
            unitId: data.unitId,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async store(galeryDomain: EntityGalery): Promise<EntityGalery> {
        const transaction = await sequelize.transaction();
        try {
            const data = await Galery.create({
                id: galeryDomain.id,
                imageUrl:
                    typeof galeryDomain.imageUrl === "string"
                        ? galeryDomain.imageUrl
                        : "",
                unitId: galeryDomain.unitId,
            });

            await transaction.commit();

            const entity = EntityGalery.create({
                id: data.id,
                imageUrl: data.imageUrl,
                unitId: data.unitId,
                createdAt: data.created_at,
                updatedAt: data.updated_at,
                deletedAt: data.deleted_at,
            });

            return entity;
        } catch (error) {
            await transaction.rollback();
            throw new AppError({
                statusCode: HttpCode.BAD_REQUEST,
                description: "Failed to create data",
                error: error,
            });
        }
    }

    async update(
        galeryId: string,
        galeryDomain: EntityGalery
    ): Promise<EntityGalery> {
        const data = await Galery.findByPk(galeryId);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        await data.update({
            imageUrl:
                typeof galeryDomain.imageUrl === "string"
                    ? galeryDomain.imageUrl
                    : "",
        });

        await data.reload();

        return EntityGalery.create({
            id: data.id,
            imageUrl: data.imageUrl,
            unitId: data.unitId,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async destroy(galeryId: string): Promise<boolean> {
        const data = await Galery.findByPk(galeryId);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        await data.destroy();

        return true;
    }
}
