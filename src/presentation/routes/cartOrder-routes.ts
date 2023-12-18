import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import CartOurdertOrderController from "../controllers/cartOrder-controller";
import { TYPES } from "../../types";

@injectable()
export class CartOurderRoutes {
    public route = "_cartOurder";
    CartOurderControllerInstance = container.get<CartOurdertOrderController>(
        CartOurdertOrderController
    );

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.CartOurderControllerInstance.get.bind(
                    this.CartOurderControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:cartOurderId`,
            asyncWrap(
                this.CartOurderControllerInstance.show.bind(
                    this.CartOurderControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:cartOurderId`,
            asyncWrap(
                this.CartOurderControllerInstance.update.bind(
                    this.CartOurderControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.CartOurderControllerInstance.store.bind(
                    this.CartOurderControllerInstance
                )
            )
        );
    }
}
