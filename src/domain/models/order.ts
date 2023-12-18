import { Entity } from "./entity";
import { ITrip } from "./trip";
import { ICar } from "./car";
export interface IOrder {
    id?: string;
    tripId: string;
    depatureDate: Date;
    totalPax: number;
    fullName: string;
    email: string;
    carId: string;
    totalAmount: number;
    trip: ITrip | undefined;
    car: ICar | undefined;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Order extends Entity<IOrder> {
    constructor(props: IOrder) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IOrder): Order {
        return new Order(props);
    }

    public unmarshal(): IOrder {
        return {
            id: this._id,
            tripId: this.tripId,
            depatureDate: this.depatureDate,
            totalPax: this.totalPax,
            fullName: this.fullName,
            email: this.email,
            carId: this.carId,
            totalAmount: this.totalAmount,
            trip: this.trip,
            car: this.car,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get tripId(): string {
        return this.props.tripId;
    }

    get depatureDate(): Date {
        return this.props.depatureDate;
    }

    get totalPax(): number {
        return this.props.totalPax;
    }

    get fullName(): string {
        return this.props.fullName;
    }

    get email(): string {
        return this.props.email;
    }

    get carId(): string {
        return this.props.carId;
    }

    get totalAmount(): number {
        return this.props.totalAmount;
    }

    get trip(): ITrip | undefined {
        return this.props.trip;
    }

    get car(): ICar | undefined {
        return this.props.car;
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
