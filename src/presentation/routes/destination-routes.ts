import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import DestinationController from "../controllers/destination-controller";
import { TYPES } from "../../types";

@injectable()
export class DestinationRoutes {
    public route = "_destination";
    DestinationControllerInstance = container.get<DestinationController>(
        DestinationController
    );

    constructor() {}
    // private _permissionMiddleware: PermissionMiddleware,
    // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware)
    // private _authMiddleware: AuthMiddleware,

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.DestinationControllerInstance.get.bind(
                    this.DestinationControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:id`,
            asyncWrap(
                this.DestinationControllerInstance.show.bind(
                    this.DestinationControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:id`,
            asyncWrap(
                this.DestinationControllerInstance.update.bind(
                    this.DestinationControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.DestinationControllerInstance.store.bind(
                    this.DestinationControllerInstance
                )
            )
        );
    }
}
