import { TDataTableParam } from "@/domain/service/types";
import { IDestination, Destination } from "../models/destination";
import { TableData } from "../models/table-data";

export interface DestinationRepository {
    get(): Promise<Destination[]>;
    show(id: string): Promise<Destination>;
    getDataTable(param: TDataTableParam): Promise<TableData<IDestination>>;
    store(_destination: IDestination): Promise<Destination>;
    update(id: string, _destination: IDestination): Promise<Destination>;
    destroy(id: string): Promise<boolean>;
}
