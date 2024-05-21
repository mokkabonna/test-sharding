import { expect, test } from "vitest";

import { fourth } from "../src/fourth";
import * as shared from "../src/shared";

test("fourth", () => {
  expect(fourth()).toBe("fourth");
});

test("shared", () => {
  expect(shared.fourth()).toBe("fourth");
});
