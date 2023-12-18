import { TDataTableParam } from "@/domain/service/types";
import { IUnit, Unit } from "../models/unit";
import { TableData } from "../models/table-data";

export interface UnitRepository {
    get(): Promise<Unit[]>;
    show(id: string): Promise<Unit>;
    getDataTable(param: TDataTableParam): Promise<TableData<IUnit>>;
    store(user: IUnit): Promise<Unit>;
    update(id: string, user: IUnit): Promise<Unit>;
    destroy(id: string): Promise<boolean>;
}
