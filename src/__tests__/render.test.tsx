import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages";
import NotFound from "../pages/404";
import About from "../pages/apps";
import Apps from "../pages/apps";
import Libs from "../pages/libs";

test("render", async () => {
  render(<NotFound />);
});

test("render", async () => {
  render(<About />);
});

test("render", async () => {
  render(<Apps />);
});

test("render", async () => {
  render(<Index />);
});

test("render", async () => {
  render(<Libs />);
});
