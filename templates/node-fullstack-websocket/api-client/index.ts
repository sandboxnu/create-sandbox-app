import Axios, { AxiosInstance } from "axios";
import { ClubRoutes, Club } from "server/api/clubRouter";

export type { Club };

export class API {
  private axios: AxiosInstance;
  club: ClubRoutes = {
    index: async () => {
      return (await this.axios.get("/api/club")).data;
    },
    create: async (p) => {
      return (await this.axios.post("/api/club", p)).data;
    },
  };
  constructor(baseURL: string = "") {
    this.axios = Axios.create({ baseURL: baseURL });
  }
}
