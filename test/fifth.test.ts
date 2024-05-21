import { expect, test } from "vitest";

import { fifth } from "../src/fifth";
import * as shared from "../src/shared";

test("fifth", () => {
  expect(fifth()).toBe("fifth");
});

test("shared", () => {
  expect(shared.fifth()).toBe("fifth");
});
