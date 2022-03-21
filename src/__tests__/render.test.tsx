import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages";
import NotFound from "../pages/404";
import About from "../pages/apps";
import Apps from "../pages/apps";
import Libs from "../pages/libs";

test("render NotFound", async () => {
  render(<NotFound />);
});

test("render About", async () => {
  render(<About />);
});

test("render Apps", async () => {
  render(<Apps />);
});

test("render Index", async () => {
  render(<Index />);
});

test("render Libs", async () => {
  render(<Libs />);
});
