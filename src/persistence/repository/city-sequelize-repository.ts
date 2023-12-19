import { CityRepository } from "@/domain/service/city-repository";
import { City as EntityCity, ICity } from "@/domain/models/city";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";
import { City } from "@/infrastructure/database/models";

@injectable()
export class CitySequelizeRepository implements CityRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<ICity>> {
        const data = await City.findAll({
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
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at || undefined,
            })),
        });
    }
    async get(): Promise<EntityCity[]> {
        const data = await City.findAll({
            attributes: ["id", "name"],
        });

        return data.map((el) =>
            EntityCity.create({
                id: el.id,
                name: el.name,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })
        );
    }

    async show(id: string): Promise<EntityCity> {
        const data = await City.findByPk(id, {
            attributes: ["id", "name"],
        });
        console.log(data);
        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        return EntityCity.create({
            id: data.id,
            name: data.name,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async store(cityDomain: EntityCity): Promise<EntityCity> {
        const transaction = await sequelize.transaction();
        try {
            const data = await City.create({
                id: cityDomain.id,
                name: cityDomain.name,
            });
            await transaction.commit();

            const entity = EntityCity.create({
                id: data.id,
                name: data.name,
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

    async update(id: string, cityDomain: EntityCity): Promise<EntityCity> {
        const data = await City.findByPk(id, {
            attributes: ["id", "name"],
        });

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data not found",
            });
        }

        await data.update({
            name: cityDomain.name,
        });

        await data.reload();

        return EntityCity.create({
            id: data.id,
            name: data.name,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            deletedAt: data.deleted_at,
        });
    }

    async destroy(id: string): Promise<boolean> {
        const data = await City.findByPk(id, {
            attributes: ["id", "name"],
        });

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
