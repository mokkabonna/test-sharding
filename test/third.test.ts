import { expect, test } from "vitest";

import { third } from "../src/third";
import * as shared from "../src/shared";

test("third", () => {
  expect(third()).toBe("third");
});

test("shared", () => {
  expect(shared.third()).toBe("third");
});
