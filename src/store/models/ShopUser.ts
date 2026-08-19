/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ShopUser {

  export type User = {
      id: string,
      name: string,
  }

  export type Auth = {
    accessToken: string,
    createdAt: number,
    expireIn: string,
  }

}

