import { z } from "zod";
import { IMulterFile } from "./types";

export const galeryCreateScheme = z.object({
    imageUrl: z
        .any()
        .nullish()
        .refine((val) => typeof val === "object", "Avatar is required")
        .transform((val) => <IMulterFile>val),
    unitId: z.string(),
});

export const galeryUpdateScheme = z.object({
    imageUrl: z
        .any()
        .nullish()
        .refine((val) => typeof val === "object", "Avatar is required")
        .transform((val) => <IMulterFile>val),
    unitId: z.string(),
});

export const galeryDataTableScheme = z.object({
    page: z
        .preprocess((val) => Number(val), z.number())
        .nullish()
        .transform((value) => value ?? undefined),
    limit: z
        .preprocess((val) => Number(val), z.number())
        .nullish()
        .transform((value) => value ?? undefined),
    search: z
        .string()
        .nullish()
        .transform((value) => value ?? undefined),
});
