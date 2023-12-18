import { TDataTableParam } from "@/domain/service/types";
import { ICity, City } from "../models/city";
import { TableData } from "../models/table-data";

export interface CityRepository {
    get(): Promise<City[]>;
    show(id: string): Promise<City>;
    getDataTable(param: TDataTableParam): Promise<TableData<ICity>>;
    store(_city: ICity): Promise<City>;
    update(id: string, _city: ICity): Promise<City>;
    destroy(id: string): Promise<boolean>;
}
