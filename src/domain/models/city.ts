import { Entity } from "./entity";

export interface ICity {
    id?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class City extends Entity<ICity> {
    constructor(props: ICity) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: ICity): City {
        return new City(props);
    }

    public unmarshal(): ICity {
        return {
            id: this._id,
            name: this.name,
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
