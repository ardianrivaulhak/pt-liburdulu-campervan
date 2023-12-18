import { Entity } from "./entity";
import { IOrder } from "./order";

export interface IPaymentDetail {
    id?: string;
    orderId: string;
    userId: string;
    paymentMethodId: string;
    amount: number;
    date: Date;
    isPaid: string;
    order: IOrder | undefined;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class PaymentDetail extends Entity<IPaymentDetail> {
    constructor(props: IPaymentDetail) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IPaymentDetail): PaymentDetail {
        return new PaymentDetail(props);
    }

    public unmarshal(): IPaymentDetail {
        return {
            id: this._id,
            orderId: this.orderId,
            userId: this.userId,
            paymentMethodId: this.paymentMethodId,
            amount: this.amount,
            date: this.date,
            isPaid: this.isPaid,
            order: this.order,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get orderId(): string {
        return this.props.orderId;
    }

    get userId(): string {
        return this.props.userId;
    }
    get paymentMethodId(): string {
        return this.props.paymentMethodId;
    }

    get amount(): number {
        return this.props.amount;
    }

    get date(): Date {
        return this.props.date;
    }

    get isPaid(): string {
        return this.props.isPaid;
    }

    get order(): IOrder | undefined {
        return this.props.order;
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
