import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import PaymentMethodController from "../controllers/paymentMethod-controller";
import { TYPES } from "../../types";

@injectable()
export class PaymentMethodRoutes {
    public route = "_paymentMethod";
    PaymentMethodControllerInstance = container.get<PaymentMethodController>(
        PaymentMethodController
    );

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.PaymentMethodControllerInstance.get.bind(
                    this.PaymentMethodControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:paymentMethodId`,
            asyncWrap(
                this.PaymentMethodControllerInstance.show.bind(
                    this.PaymentMethodControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:paymentMethodId`,
            asyncWrap(
                this.PaymentMethodControllerInstance.update.bind(
                    this.PaymentMethodControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.PaymentMethodControllerInstance.store.bind(
                    this.PaymentMethodControllerInstance
                )
            )
        );
    }
}
