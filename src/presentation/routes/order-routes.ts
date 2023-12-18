import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import OrderController from "../controllers/order-controller";
import { TYPES } from "../../types";

@injectable()
export class OrderRoutes {
    public route = "_order";
    OrderControllerInstance = container.get<OrderController>(OrderController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.OrderControllerInstance.get.bind(
                    this.OrderControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:orderId`,
            asyncWrap(
                this.OrderControllerInstance.show.bind(
                    this.OrderControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:orderId`,
            asyncWrap(
                this.OrderControllerInstance.update.bind(
                    this.OrderControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.OrderControllerInstance.store.bind(
                    this.OrderControllerInstance
                )
            )
        );
    }
}
