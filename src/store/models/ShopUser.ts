/* eslint-disable @typescript-eslint/no-namespace */

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

