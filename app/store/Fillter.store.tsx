import { proxy } from "valtio";

import { FillterState } from "@/app/interfaces/Fillter.interface";

export const fillterState = proxy<FillterState>({
  fillter: "",
});
