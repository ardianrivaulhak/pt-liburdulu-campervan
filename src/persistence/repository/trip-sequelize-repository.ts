import { TripRepository } from "@/domain/service/trip-repository";
import { Trip as EntityTrip, ITrip } from "@/domain/models/trip";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class TripSequelizeRepository implements TripRepository {
    async getDataTable(param: TDataTableParam): Promise<TableData<ITrip>> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }
    async get(): Promise<EntityTrip[]> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async show(tripId: string): Promise<EntityTrip> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async store(tripDomain: EntityTrip): Promise<EntityTrip> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async update(tripId: string, tripDomain: EntityTrip): Promise<EntityTrip> {
        throw new Error(
            "This function requires a return of data from domain/model/ otherwise an error"
        );
    }

    async destroy(tripId: string): Promise<boolean> {
        throw new Error("This function requires a return ");
    }
}
