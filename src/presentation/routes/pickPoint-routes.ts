import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import PickPointController from "../controllers/pickPoint-controller";
import { TYPES } from "../../types";

@injectable()
export class PickPointRoutes {
    public route = "_pickPoint";
    PickPointControllerInstance =
        container.get<PickPointController>(PickPointController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.PickPointControllerInstance.get.bind(
                    this.PickPointControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:pickPointId`,
            asyncWrap(
                this.PickPointControllerInstance.show.bind(
                    this.PickPointControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:pickPointId`,
            asyncWrap(
                this.PickPointControllerInstance.update.bind(
                    this.PickPointControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.PickPointControllerInstance.store.bind(
                    this.PickPointControllerInstance
                )
            )
        );
    }
}
