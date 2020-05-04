/**
 * Types to share between server and frontend
 * Usually we can just directly use Prisma model types on frontend and server
 * Things that could go in here: 
 * https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/advanced-usage-of-generated-types
 */

 export enum WSMessageType {
   Count='count',
   Refresh='refresh'
 }

 export const hello = 2;