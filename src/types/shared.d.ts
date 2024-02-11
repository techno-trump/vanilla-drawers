import { Trigger } from "..";
declare global {
  interface Window {
    app: { [key: string]: any };
  }
	interface Event {
		__drawerTrigger: Trigger;
	}
}

export type TCSSSelector = string;
export type TTarget = Element | TCSSSelector;