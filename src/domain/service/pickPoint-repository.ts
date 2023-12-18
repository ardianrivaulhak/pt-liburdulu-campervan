import { TDataTableParam } from "@/domain/service/types";
import { IPickPoint, PickPoint } from "../models/pickPoint";
import { TableData } from "../models/table-data";

export interface PickPointRepository {
    get(): Promise<PickPoint[]>;
    show(pickPointId: string): Promise<PickPoint>;
    getDataTable(param: TDataTableParam): Promise<TableData<IPickPoint>>;
    store(_pickPoint: IPickPoint): Promise<PickPoint>;
    update(pickPointId: string, _pickPoint: IPickPoint): Promise<PickPoint>;
    destroy(pickPointId: string): Promise<boolean>;
}
