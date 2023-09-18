import { Request, Response } from "express";

export type RouteHanlder = (req: Request, res: Response) => any;

export enum SortMode {
  asc,
  desc,
}
