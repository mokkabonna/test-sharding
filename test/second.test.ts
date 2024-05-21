import { expect, test } from "vitest";

import { second } from "../src/second";
import * as shared from "../src/shared";

test("second", () => {
  expect(second()).toBe("second");
});

test("shared", () => {
  expect(shared.second()).toBe("second");
});
