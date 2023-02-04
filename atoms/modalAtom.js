import { atom } from "recoil";

//help us to have a global usage
export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postIdState = atom({
  key: "postIdState",
  default: "",
});
