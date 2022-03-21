jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
      locale: "",
    };
  },
}));

// jest.mock("@chakra-ui/react", () => ({
//   useColorMode() {
//     return { colorMode: "light", setColorMode: jest.fn() };
//   },
// }));

// jest.mock("@chakra-ui/icon", () => ({
//   createIcon: jest.fn(),
// }));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
