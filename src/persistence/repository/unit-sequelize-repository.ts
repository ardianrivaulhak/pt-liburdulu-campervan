import { UnitRepository } from "@/domain/service/unit-repository";
import { Unit as EntityUnit, IUnit } from "@/domain/models/unit";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";
import {
    City,
    Galery,
    Unit,
    Destination,
} from "@/infrastructure/database/models";

@injectable()
export class UnitSequelizeRepository implements UnitRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<IUnit>> {
        const data = await Unit.findAll({
            include: [
                {
                    model: Galery,
                    attributes: ["id", "imageUrl", "unitId"],
                    as: "galeries",
                },
                {
                    model: Destination,
                    attributes: ["id", "name", "unitId"],
                    as: "destinations",
                },
            ],
            where: {
                name: {
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
                name: el.name,
                description: el.description,
                galeries: el.galeries,
                destinations: el.destinations,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at || undefined,
            })),
        });
    }
    async get(): Promise<EntityUnit[]> {
        const data = await Unit.findAll({
            include: [
                {
                    model: Galery,
                    attributes: ["id", "imageUrl", "unitId"],
                    as: "galeries",
                },
                {
                    model: Destination,
                    attributes: ["id", "name", "unitId"],
                    as: "destinations",
                },
            ],
        });
        return data.map((el) =>
            EntityUnit.create({
                id: el.id,
                name: el.name,
                description: el.description,
                galeries: el.galeries,
                destinations: el.destinations,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at || undefined,
            })
        );
    }

    async show(unitId: string): Promise<EntityUnit> {
        const data = await Unit.findByPk(unitId, {
            include: [
                {
                    model: Galery,
                    attributes: ["id", "imageUrl", "unitId"],
                    as: "galeries",
                },
                {
                    model: Destination,
                    attributes: ["id", "name", "unitId"],
                    as: "destinations",
                },
            ],
        });
        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        return EntityUnit.create({
            id: data.id,
            name: data.name,
            description: data.description,
            galeries: data.galeries,
            destinations: data.destinations,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async store(unitDomain: IUnit): Promise<EntityUnit> {
        const transaction = await sequelize.transaction();

        try {
            const data = await Unit.create({
                id: unitDomain.id,
                name: unitDomain.name,
                description: unitDomain.description,
            });
            await transaction.commit();

            const entity = EntityUnit.create({
                id: data.id,
                name: data.name,
                description: data.description,
                createdAt: data.created_at,
                updatedAt: data.updated_at,
                deletedAt: data.deleted_at,
            });

            return entity;
        } catch (error) {
            console.log(error);
            await transaction.rollback();
            throw new AppError({
                statusCode: HttpCode.BAD_REQUEST,
                description: "Failed to create data",
                error: error,
            });
        }
    }

    async update(unitId: string, unitDomain: EntityUnit): Promise<EntityUnit> {
        const data = await Unit.findByPk(unitId);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        await data.update({
            name: unitDomain.name,
            description: unitDomain.description,
        });

        await data.reload();

        return EntityUnit.create({
            id: data.id,
            name: data.name,
            description: data.description,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async destroy(unitId: string): Promise<boolean> {
        const data = await Unit.findByPk(unitId);

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
