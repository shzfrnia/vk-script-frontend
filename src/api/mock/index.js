import {FakeUser, FakeFriends} from "./data";


export class UserAPI {
    static async getUser(user_ids) {
        if (user_ids === '1') {
            const account = FakeUser
            return account
        } else {
            throw {error: "User not found"}
        }
    }

    static async getFriends(user_ids) {
      if(UserAPI.foo()) {
        const friends = FakeFriends
        return friends
      } else {
        throw {error: "Something went wrong"}
      }
    }

    static foo() {
        return true
    }
}