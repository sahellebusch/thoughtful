export enum SortStatus {
  REJECTED = "REJECTED",
  SPECIAL = "SPECIAL",
  STANDARD = "STANDARD",
}

/**
 * Sorts a package based on its dimensions and mass.
 *
 * @param {number} width - The width of the package in cm.
 * @param {number} height - The height of the package in cm.
 * @param {number} length - The length of the package in cm.
 * @param {number} mass - The mass of the package in kg.
 * @returns {string} The status of the package.
 *
 * @example
 *
 * // STANDARD case
 * sortPackage(50, 50, 50, 5); // "STANDARD"
 *
 * // SPECIAL case
 * sortPackage(150, 150, 150, 5); // "SPECIAL"
 *
 * // REJECTED case
 * sortPackage(150, 150, 150, 21); // "REJECTED"
 */
export function sortPackage(
  width: number,
  height: number,
  length: number,
  mass: number
): string {
  const volume = width * height * length;

  const isBulky =
    volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return SortStatus.REJECTED;
  } else if (isBulky || isHeavy) {
    return SortStatus.SPECIAL;
  }

  return SortStatus.STANDARD;
}
