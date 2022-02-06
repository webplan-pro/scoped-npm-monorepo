import { isOdd } from "@acme-corp/is-odd";

export function evenOrOdd(i: number): string {
  return isOdd(i) ? "odd" : "even";
}
