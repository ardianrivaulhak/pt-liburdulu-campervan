import { IGalery, Galery } from "@/domain/models/galery";
import { GaleryRepository } from "@/domain/service/galery-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class GaleryService {
    constructor(
        @inject(TYPES.GaleryRepository)
        private _repository: GaleryRepository
    ) {}

    public async get(): Promise<IGalery[]> {
        const data = await this._repository.get();

        const galeryDto = data.map((el) => el.unmarshal());
        return galeryDto;
    }

    public async show(galeryId: string): Promise<IGalery> {
        const data = await this._repository.show(galeryId);

        return data.unmarshal();
    }
    public async store(_galery: IGalery): Promise<IGalery> {
        const galeryData = Galery.create({
            imageUrl: _galery.imageUrl,
            unitId: _galery.unitId,
        }) as Galery;

        if (typeof _galery.imageUrl === "object") {
            const imageUrl = FileSystem.store(_galery.imageUrl, "galery");
            (galeryData as any).imageUrl = imageUrl;
        }

        const data = await this._repository.store(galeryData);

        return data.unmarshal();
    }

    public async update(galeryId: string, _galery: IGalery): Promise<IGalery> {
        const toUpdateGalery = Galery.create({
            id: _galery.id,
            imageUrl: _galery.imageUrl,
            unitId: _galery.unitId,
        });

        if (typeof _galery.imageUrl === "object") {
            const imageUrl = FileSystem.store(_galery.imageUrl, "galery");
            (toUpdateGalery as any).imageUrl = imageUrl;
        }
        const city = await this._repository.update(galeryId, toUpdateGalery);
        return city.unmarshal();
    }

    public async destroy(galeryId: string): Promise<boolean> {
        const data = await this._repository.show(galeryId);
        await this._repository.destroy(galeryId);
        return true;
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IGalery>> {
        const data = await this._repository.getDataTable(param);
        console.log(data.data);
        return data.unmarshal();
    }
}
