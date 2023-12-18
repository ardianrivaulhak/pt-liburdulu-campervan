import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import PaymentDetailController from "../controllers/paymentDetail-controller";
import { TYPES } from "../../types";

@injectable()
export class PaymentDetailRoutes {
    public route = "_paymentDetail";
    PaymentDetailControllerInstance = container.get<PaymentDetailController>(
        PaymentDetailController
    );

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.PaymentDetailControllerInstance.get.bind(
                    this.PaymentDetailControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:paymentDetailId`,
            asyncWrap(
                this.PaymentDetailControllerInstance.show.bind(
                    this.PaymentDetailControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:paymentDetailId`,
            asyncWrap(
                this.PaymentDetailControllerInstance.update.bind(
                    this.PaymentDetailControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.PaymentDetailControllerInstance.store.bind(
                    this.PaymentDetailControllerInstance
                )
            )
        );
    }
}
