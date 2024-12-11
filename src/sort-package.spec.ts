import { sortPackage, SortStatus } from "./sort-package";

describe("sort function", () => {
  describe("STANDARD cases", () => {
    it("returns STANDARD for packages with small dimensions and light weight", () => {
      expect(sortPackage(50, 50, 50, 5)).toBe(SortStatus.STANDARD);
    });

    it("returns STANDARD for packages near the bulky limit but not exceeding", () => {
      expect(sortPackage(100, 100, 99.9, 19.99)).toBe(SortStatus.STANDARD);
    });
  });

  describe("SPECIAL cases", () => {
    it("returns SPECIAL for packages exceeding the bulky limit but not weight", () => {
      expect(sortPackage(150, 150, 150, 5)).toBe(SortStatus.SPECIAL);
    });

    it("returns SPECIAL for packages exceeding the weight limit but not volume", () => {
      expect(sortPackage(50, 50, 50, 21)).toBe(SortStatus.SPECIAL);
    });

    it("returns SPECIAL for packages at the bulky limit but not weight", () => {
      expect(sortPackage(100, 100, 100, 5)).toBe(SortStatus.SPECIAL);
    });

    it("returns SPECIAL for packages at the weight limit but not volume", () => {
      expect(sortPackage(50, 50, 50, 20)).toBe(SortStatus.SPECIAL);
    });
  });

  describe("REJECTED cases", () => {
    it("returns REJECTED for packages exceeding both the bulky and weight limits", () => {
      expect(sortPackage(150, 150, 150, 21)).toBe(SortStatus.REJECTED);
    });

    it("returns REJECTED for packages at the bulky and weight limits", () => {
      expect(sortPackage(100, 100, 100, 20)).toBe(SortStatus.REJECTED);
    });
  });
});
