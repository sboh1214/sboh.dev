import React from "react";
import { render } from "@testing-library/react";
import Layout from "../layout";

test("render Layout", async () => {
  render(<Layout title="Hello">Hello</Layout>);
});
