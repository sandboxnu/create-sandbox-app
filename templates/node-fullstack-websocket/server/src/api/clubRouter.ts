import { Router, Response } from "express";
import websocketManager from "../websocketManager";
import { ClubModel } from "../entity/ClubModel";
import {
  GetClubResponse,
  CreateClubParams,
  WSMessageType,
  CreateClubResponse,
} from "@template/common";
import { validate, schema as Validation, Joi } from "express-validation";

const clubRouter = Router();

clubRouter.get("/", async (req, res: Response<GetClubResponse>) => {
  const c = await ClubModel.find();
  res.status(200).json(c);
});

const createValidation: Validation = {
  body: Joi.object({
    name: Joi.string(),
    rating: Joi.number(),
  }),
};

clubRouter.post(
  "/",
  validate(createValidation),
  async (req, res: Response<CreateClubResponse>) => {
    const { name, rating } = req.body as CreateClubParams;
    const c = await ClubModel.create({ name, rating }).save();
    websocketManager.emitAll(WSMessageType.Refresh, null);
    res.status(201).json(c);
  }
);

export default clubRouter;
