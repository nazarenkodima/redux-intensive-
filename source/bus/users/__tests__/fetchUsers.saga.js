//Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

//Instruments
import { api } from "../../../REST";
import { usersActions } from "../../users/actions";
import { uiActions } from "../../ui/actions";
import { fetchUsers } from "../saga/workers";

const saga = cloneableGenerator(fetchUsers)(usersActions);
let clone = null;

describe("fetchUsers saga", () => {
    describe("should pass until response received", () => {
        test("should dispatch START_FETCHING action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test("should call a fetch request", () => {
            expect(saga.next().value).toEqual(apply(api, api.users.fetch));
            clone = saga.clone();
        });
    });

    describe("should handle a 400 status request", () => {
        test("a fetch request should return 400 status response", () => {
            expect(clone.next(__.fetchResponseFail400).value).toEqual(
                apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
            );
        });

        test("should contain response data object ", () => {
            expect(clone.next(__.responseDataFail).value).toEqual(
                put(uiActions.emitError(__.error, "fetchUsers worker"))
            );
        });

        test("should dispatch STOP_FETCHING action", () => {
            expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
        });

        test("should finish", () => {
            expect(clone.next().done).toBe(true);
        });
    });

    describe("should handle a 200 status request", () => {
        test("a fetch request should return 200 status response data object", () => {
            expect(saga.next(__.fetchResponseSuccess).value).toEqual(
                apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
            );
        });

        test("should dispatch FILL_USERS action", () => {
            expect(saga.next(__.responseDataSuccess2).value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "payload": Array [
        Object {
          "avatar": "TEST_AVATAR",
          "firstName": "Walter",
          "id": "TEST_ID",
          "lastName": "White",
        },
        Object {
          "avatar": "TEST_AVATAR2",
          "firstName": "Walter2",
          "id": "TEST_ID2",
          "lastName": "White2",
        },
        Object {
          "avatar": "TEST_AVATAR3",
          "firstName": "Walter3",
          "id": "TEST_ID3",
          "lastName": "White3",
        },
      ],
      "type": "FILL_USERS",
    },
    "channel": null,
  },
}
`);
        });

        test("should dispatch STOP_FETCHING action", () => {
            expect(saga.next().value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "type": "STOP_FETCHING",
    },
    "channel": null,
  },
}
`);
        });

        test("should finish", () => {
            expect(saga.next().done).toBe(true);
        });
    });
});
