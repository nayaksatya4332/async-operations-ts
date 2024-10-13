import { getUserCallback } from "./services/github/callbacks";
import { getUser } from "./services/github/functions";

getUser(100, getUserCallback);