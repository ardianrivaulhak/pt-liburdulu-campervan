import { z } from "zod";
import { IMulterFile } from "./types";

export const unitCreateScheme = z.object({
    name: z.string(),
    description: z.string(),
});

export const unitUpdateScheme = z.object({
    name: z.string(),
    description: z.string(),
});

export const unitDataTableScheme = z.object({
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
