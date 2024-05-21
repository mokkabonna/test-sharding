import { expect, test } from "vitest";

import { first } from "../src/first";
import * as shared from "../src/shared";

test("first", () => {
  expect(first()).toBe("first");
});

test("shared", () => {
  expect(shared.first()).toBe("first");
});
