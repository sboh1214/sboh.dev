import React from "react";
import { render } from "@testing-library/react";
import Links from "../links";
import NavBar from "../navBar";
import SelectTranslation from "../selectTranslation";
import ToolBar from "../toolBar";
import SelectTheme from "../selectTheme";

test("render Links", async () => {
  render(<Links />);
});

test("render NavBar", async () => {
  render(<NavBar />);
});

test("render SelectTranslation", async () => {
  render(<SelectTranslation isLarge={true} />);
  render(<SelectTranslation isLarge={false} />);
});

test("render SelectTheme", async () => {
  render(<SelectTheme isLarge={true} />);
  render(<SelectTheme isLarge={false} />);
});

test("render ToolBar", async () => {
  render(<ToolBar isLarge={true} />);
  render(<ToolBar isLarge={false} />);
});
