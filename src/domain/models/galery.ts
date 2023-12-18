import { Entity } from "./entity";
import { IMulterFile } from "@/presentation/validation/types";
export interface IGalery {
    id?: string;
    imageUrl: string | IMulterFile;
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
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get imageUrl(): string | IMulterFile {
        return this.props.imageUrl;
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
