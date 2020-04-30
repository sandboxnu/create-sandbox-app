/**
 * Types to specify the API. Shared between server and frontend
 */

export interface Club extends CreateClub{
  id: number
}

export interface CreateClub {
  name: string
  rating: number,
}