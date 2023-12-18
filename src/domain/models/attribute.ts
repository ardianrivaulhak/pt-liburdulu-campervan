import { Entity } from "./entity";

export interface IAttribute {
    id?: string;
    seat: string;
    luggage: string;
    transmission: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Attribute extends Entity<IAttribute> {
    constructor(props: IAttribute) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IAttribute): Attribute {
        return new Attribute(props);
    }

    public unmarshal(): IAttribute {
        return {
            id: this._id,
            seat: this.seat,
            luggage: this.luggage,
            transmission: this.transmission,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get seat(): string {
        return this.props.seat;
    }

    get luggage(): string {
        return this.props.luggage;
    }

    get transmission(): string {
        return this.props.transmission;
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
