import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import UnitController from "../controllers/unit-controller";
import { TYPES } from "../../types";

@injectable()
export class UnitRoutes {
    public route = "_unit";
    UnitControllerInstance = container.get<UnitController>(UnitController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.UnitControllerInstance.getDataTable.bind(
                    this.UnitControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:unitId`,
            asyncWrap(
                this.UnitControllerInstance.show.bind(
                    this.UnitControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:unitId`,
            asyncWrap(
                this.UnitControllerInstance.update.bind(
                    this.UnitControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.UnitControllerInstance.store.bind(
                    this.UnitControllerInstance
                )
            )
        );

        router.delete(
            `/${this.route}/:unitId`,
            asyncWrap(
                this.UnitControllerInstance.destroy.bind(
                    this.UnitControllerInstance
                )
            )
        );
    }
}
