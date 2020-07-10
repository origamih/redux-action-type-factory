import { actionTypesFactory } from "../index";

describe("Action type factory", () => {
  it("should be able to create action type without prefix", () => {
    const actionTypes = actionTypesFactory("", "INCREMENT");
    return expect(actionTypes).toEqual({
      INCREMENT: {
        default: "INCREMENT",
        begin: "INCREMENT" + "_BEGIN",
        succeeded: "INCREMENT" + "_SUCCEEDED",
        failed: "INCREMENT" + "_FAILED",
        cancelled: "INCREMENT" + "_CANCELLED",
      },
    });
  });

  it("should be able to create ation type with prefix", () => {
    const actionTypes = actionTypesFactory("todo", "INCREMENT");
    return expect(actionTypes).toEqual({
      INCREMENT: {
        default: "todo/" + "INCREMENT",
        begin: "todo/" + "INCREMENT" + "_BEGIN",
        succeeded: "todo/" + "INCREMENT" + "_SUCCEEDED",
        failed: "todo/" + "INCREMENT" + "_FAILED",
        cancelled: "todo/" + "INCREMENT" + "_CANCELLED",
      },
    });
  });
});
