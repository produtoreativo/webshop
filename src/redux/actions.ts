import { PaletteMode } from "@mui/material";
import { Reducer, Action } from "redux";
import { GlobalState } from "./state";

export const THEME_SWITCH = '@@THEME_SWITCH';

export type Meta = {
    reducer: Reducer<GlobalState, GlobalAction>;
};

export interface GlobalAction extends Action {
    type: string;
    payload?: object;
    meta?: Meta;
}

export const darkModeSelector = (state: GlobalState) => (state.darkMode as PaletteMode)