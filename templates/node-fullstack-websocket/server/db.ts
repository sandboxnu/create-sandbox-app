import { createConnection, Connection } from "typeorm";
import { Club } from "./entity/Club";
import path from "path";

/** singleton */
class DB {
  private connection: Connection;
  async connect() {
    if (this.connection === undefined) {
      this.connection = await createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "",
        "database": "dev",
        "synchronize": true,
        "logging": false,
        "entities": [
          path.join(__dirname, "entity/**/*{.js,.ts}")
        ],
        "migrations": [
          path.join(__dirname, "migration/**/*{.js,.ts}")
        ],
        "subscribers": [
          path.join(__dirname, "subscriber/**/*{.js,.ts}")
        ]
      });
    } else {
      return this.connection;
    }
  }
}

export const db = new DB();