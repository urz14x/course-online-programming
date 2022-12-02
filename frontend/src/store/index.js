import { atom } from "recoil";

// const fontSizeState = atom({
//   key: "fontSizeState",
//   default: 14,
// });

const authenticated = atom({
  key: "authenticated",
  default: {
    check: false,
    user: [],
  },
});

export { authenticated };
