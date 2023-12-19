import { TDataTableParam } from "@/domain/service/types";
import { IUnit, Unit } from "../models/unit";
import { TableData } from "../models/table-data";

export interface UnitRepository {
    get(): Promise<Unit[]>;
    show(unitId: string): Promise<Unit>;
    getDataTable(param: TDataTableParam): Promise<TableData<IUnit>>;
    store(_unit: IUnit): Promise<Unit>;
    update(unitId: string, user: IUnit): Promise<Unit>;
    destroy(unitId: string): Promise<boolean>;
}
