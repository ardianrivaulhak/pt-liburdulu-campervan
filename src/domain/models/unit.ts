import { Entity } from "./entity";
import { IGalery } from "./galery";

export interface IUnit {
    id?: string;
    name: string;
    description: string;
    galeryId: string;
    galery?: IGalery | undefined;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Unit extends Entity<IUnit> {
    constructor(props: IUnit) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IUnit): Unit {
        return new Unit(props);
    }

    public unmarshal(): IUnit {
        return {
            id: this._id,
            name: this.name,
            description: this.description,
            galeryId: this.galeryId,
            galery: this.galery,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }
    get galeryId(): string {
        return this.props.galeryId;
    }

    get galery(): IGalery | undefined {
        return this.props.galery;
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
