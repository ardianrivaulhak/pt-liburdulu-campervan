import { Entity } from "./entity";

export interface ICartOrder {
    id?: string;
    userId: string;
    expiredAt: Date;
    quantity: number;
    pricePerUnit: number;
    subTotal: number;
    orderId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class CartOrder extends Entity<ICartOrder> {
    constructor(props: ICartOrder) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: ICartOrder): CartOrder {
        return new CartOrder(props);
    }

    public unmarshal(): ICartOrder {
        return {
            id: this._id,
            userId: this.userId,
            expiredAt: this.expiredAt,
            quantity: this.quantity,
            pricePerUnit: this.pricePerUnit,
            subTotal: this.subTotal,
            orderId: this.orderId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this.props.userId;
    }

    get expiredAt(): Date {
        return this.props.expiredAt;
    }

    get quantity(): number {
        return this.props.quantity;
    }

    get pricePerUnit(): number {
        return this.props.pricePerUnit;
    }

    get subTotal(): number {
        return this.props.subTotal;
    }

    get orderId(): string {
        return this.props.orderId;
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
