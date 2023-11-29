import { expect, test } from "vitest";

import { sum } from "./example";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});
