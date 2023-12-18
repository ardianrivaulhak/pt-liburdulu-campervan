import { TDataTableParam } from "@/domain/service/types";
import { ITrip, Trip } from "../models/trip";
import { TableData } from "../models/table-data";

export interface TripRepository {
    get(): Promise<Trip[]>;
    show(tripId: string): Promise<Trip>;
    getDataTable(param: TDataTableParam): Promise<TableData<ITrip>>;
    store(_trip: ITrip): Promise<Trip>;
    update(tripId: string, _trip: ITrip): Promise<Trip>;
    destroy(tripId: string): Promise<boolean>;
}
