import { describe, expect, test, it } from "@jest/globals";
import map from "./map";

describe("test map", () => {
  it("should correctly apply the map function", () => {
    const array = [1, 2, 3, 4, 5];
    const expectedResult = [2, 4, 6, 8, 10];
    const actualResult = map(array, (value) => value * 2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("should return a new array", () => {
    const array = [1, 2, 3];
    const expectedResult = [1, 2, 3];
    const actualResult = map(array, (value) => value);

    expect(actualResult).not.toBe(expectedResult);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should work with any types", () => {
    const array = ["a", "b"];
    const expectedResult = ["ab", "bb"];
    const actualResult = map(array, (value) => `${value}b`);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should be able to return different type than input", () => {
    const array = ["a", "b"];
    const expectedResult = [{ a: 1 }, { b: 1 }];
    const actualResult = map(array, (value) => ({ [value]: 1 }));
    expect(actualResult).toEqual(expectedResult);
  });
});
