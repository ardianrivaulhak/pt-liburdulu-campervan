import { Entity } from "./entity";
import { IGalery } from "./galery";
import { ICity } from "./city";
import { IDestination } from "./destination";
import { IPickPoint } from "./pickPoint";

export interface ITrip {
    id?: string;
    cityId: string;
    destinationId: string;
    galeryId: string;
    price: number;
    termsCondition: string;
    pickPointId: string;
    starDate: Date;
    endDate: Date;
    clock: Date;
    city: ICity | undefined;
    destination: IDestination | undefined;
    galery: IGalery | undefined;
    pickPoint: IPickPoint | undefined;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Trip extends Entity<ITrip> {
    constructor(props: ITrip) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: ITrip): Trip {
        return new Trip(props);
    }

    public unmarshal(): ITrip {
        return {
            id: this._id,
            cityId: this.cityId,
            destinationId: this.destinationId,
            galeryId: this.galeryId,
            price: this.price,
            termsCondition: this.termsCondition,
            pickPointId: this.pickPointId,
            starDate: this.starDate,
            endDate: this.endDate,
            clock: this.clock,
            city: this.city,
            destination: this.destination,
            galery: this.galery,
            pickPoint: this.pickPoint,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get cityId(): string {
        return this.props.cityId;
    }

    get destinationId(): string {
        return this.props.destinationId;
    }
    get galeryId(): string {
        return this.props.galeryId;
    }

    get price(): number {
        return this.props.price;
    }

    get termsCondition(): string {
        return this.props.termsCondition;
    }

    get pickPointId(): string {
        return this.props.pickPointId;
    }

    get starDate(): Date {
        return this.props.starDate;
    }
    get endDate(): Date {
        return this.props.endDate;
    }
    get clock(): Date {
        return this.props.clock;
    }

    get city(): ICity | undefined {
        return this.props.city;
    }
    get destination(): IDestination | undefined {
        return this.props.destination;
    }

    get galery(): IGalery | undefined {
        return this.props.galery;
    }

    get pickPoint(): IPickPoint | undefined {
        return this.props.pickPoint;
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
