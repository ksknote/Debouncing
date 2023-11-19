import { atom } from "recoil";

let debounceLogState = atom<string[]>({
  key: "debounceLog",
  default: [],
});

export default debounceLogState;
