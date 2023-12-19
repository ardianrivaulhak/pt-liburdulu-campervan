import { TDataTableParam } from "@/domain/service/types";
import { IGalery, Galery } from "../models/galery";
import { TableData } from "../models/table-data";

export interface GaleryRepository {
    get(): Promise<Galery[]>;
    show(galeryId: string): Promise<Galery>;
    getDataTable(param: TDataTableParam): Promise<TableData<IGalery>>;
    store(_galery: IGalery): Promise<Galery>;
    update(galeryId: string, _galery: IGalery): Promise<Galery>;
    destroy(galeryId: string): Promise<boolean>;
}
