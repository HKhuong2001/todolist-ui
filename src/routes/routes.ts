import { ComponentState } from "react";
import { Route } from "react-router-dom";
import { AddToDos, Home } from "../view/page";
import config from "../config";

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Route {
  component: ComponentState;
  path: string;
}

const routeClient: Route[] = [
  { component: Home, path: config.home },
  { component: AddToDos, path: config.add },
];

export default routeClient;
