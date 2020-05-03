/**
 * Business logic in the Service!
 */

// import { Club, CreateClub } from "../../shared/types";
import { PrismaClient, Club, ClubCreateInput } from "@prisma/client"
const prisma = new PrismaClient()

export async function getClubs(): Promise<Club[]> {
  return prisma.club.findMany();
}

export async function createClub({ name, rating }: ClubCreateInput) {
  return prisma.club.create({
    data: {
      name, rating
    }
  });
}