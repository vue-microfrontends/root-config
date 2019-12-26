import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@vue-mf/navbar",
  () => System.import("@vue-mf/navbar"),
  isActive.navbar
);

start();
