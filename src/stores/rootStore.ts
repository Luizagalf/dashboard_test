import { createContext, useContext } from "react";
import { DashboardStore } from "./dashboardStore";
import { ListStore } from "./listStore";

export class RootStore {
  dashboardStore: DashboardStore;
  listStore: ListStore;

  constructor() {
    this.dashboardStore = new DashboardStore(this);
    this.listStore = new ListStore(this);
  }
}

const RootStoreContext = createContext<RootStore>(new RootStore());

export const useStores = () => useContext(RootStoreContext);
