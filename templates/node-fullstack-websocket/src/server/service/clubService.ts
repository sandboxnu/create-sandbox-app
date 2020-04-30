/**
 * Business logic in the Service!
 */

import { ClubModel } from "../entity/ClubModel";
import { Club, CreateClub } from "../../shared/types";

export async function getClub(): Promise<Club> {
  return ClubModel.findOne()
}

export async function createClub(clubInfo: CreateClub) {
  let club = new ClubModel();
  club.name = clubInfo.name
  club.rating = clubInfo.rating
  await club.save();
  return club;
}