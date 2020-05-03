/**
 * Business logic in the Service!
 */

// import { Club, CreateClub } from "../../shared/types";
import { PrismaClient, Club, ClubCreateInput } from "@prisma/client"
const prisma = new PrismaClient()

export async function getClubs(): Promise<Club[]> {
  return prisma.club.findMany({first: 5});
}

export async function createClub({ name, rating }: ClubCreateInput) {
  console.log('hey')
  return prisma.club.create({
    data: {
      name, rating
    }
  });
}