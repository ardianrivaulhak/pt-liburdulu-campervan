import { Entity } from "./entity";
import { IMulterFile } from "@/presentation/validation/types";
export interface IGalery {
    id?: string;
    imageUrl?: string | IMulterFile;
    unitId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Galery extends Entity<IGalery> {
    constructor(props: IGalery) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IGalery): Galery {
        return new Galery(props);
    }

    public unmarshal(): IGalery {
        return {
            id: this._id,
            imageUrl: this.imageUrl,
            unitId: this.unitId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get unitId(): string {
        return this.props.unitId;
    }

    get imageUrl(): undefined | string | IMulterFile {
        return this.props.imageUrl;
    }

    set imageUrl(val: undefined | string | IMulterFile) {
        this.props.imageUrl = val;
    }

    get id(): string {
        return this._id;
    }

    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
    get deletedAt(): undefined | Date | null {
        return this.props.deletedAt;
    }
}
