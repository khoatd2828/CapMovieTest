import { resolve } from "path";

export const sleep = () => new Promise((resolve) => setTimeout(resolve, time))