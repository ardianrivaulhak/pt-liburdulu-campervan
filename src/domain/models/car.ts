import { IAttribute } from "./attribute";
import { Entity } from "./entity";

export interface ICar {
    id?: string;
    name: string;
    description: string;
    typeCar: string;
    verifyStatus: string;
    attribute: IAttribute | undefined;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Car extends Entity<ICar> {
    constructor(props: ICar) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: ICar): Car {
        return new Car(props);
    }

    public unmarshal(): ICar {
        return {
            id: this._id,
            name: this.name,
            description: this.description,
            typeCar: this.typeCar,
            verifyStatus: this.verifyStatus,
            attribute: this.attribute,
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

    get typeCar(): string {
        return this.props.typeCar;
    }

    get verifyStatus(): string {
        return this.props.verifyStatus;
    }

    get attribute(): IAttribute | undefined {
        return this.props.attribute;
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
