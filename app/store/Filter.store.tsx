import { proxy } from "valtio";

import { FilterState } from "../interfaces/Filter.interface";

export const filterState = proxy<FilterState>({
  filter: "",
});
