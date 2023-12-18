import { TDataTableParam } from "@/domain/service/types";
import { IAttribute, Attribute } from "../models/attribute";
import { TableData } from "../models/table-data";

export interface AttributeRepository {
    get(): Promise<Attribute[]>;
    show(attributeId: string): Promise<Attribute>;
    getDataTable(param: TDataTableParam): Promise<TableData<IAttribute>>;
    store(_attribute: IAttribute): Promise<Attribute>;
    update(attributeId: string, _attribute: IAttribute): Promise<Attribute>;
    destroy(attributeId: string): Promise<boolean>;
}
