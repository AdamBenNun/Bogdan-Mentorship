import { describe, expect, test, it } from "@jest/globals";
import filter from "./filter";

describe("test filter", () => {
  it("should correctly apply the filter function", () => {
    const array = [1, 2, 3, 4, 5];
    const expectedResult = [2, 4];
    const actualResult = filter(array, (value) => value % 2 === 0);

    expect(actualResult).toEqual(expectedResult);
  });

  it("should return an empty array if the input is an empty array", () => {
    const array: any = [];
    const expectedResult: any = [];
    const actualResult = filter(array, (value) => value);

    expect(actualResult).toEqual(expectedResult);
  });

  it("should return an empty array if filter doesn't match anything", () => {
    const array = [1, 2, 3, 4, 5];
    const expectedResult: any = [];
    const actualResult = filter(array, (value) => false);

    expect(actualResult).toEqual(expectedResult);
  });

  it("should work with any types", () => {
    const array = ["a", "b", "c", "d", "e"];
    const expectedResult = ["c"];
    const actualResult = filter(array, (value) => value.includes("c"));

    expect(actualResult).toEqual(expectedResult);
  });

  it("should return a new array", () => {
    const array = [1, 2, 3];
    const expectedResult = [1, 2, 3];
    const actualResult = filter(array, (value) => true);

    expect(actualResult).not.toBe(expectedResult);
    expect(actualResult).toEqual(expectedResult);
  });
});
