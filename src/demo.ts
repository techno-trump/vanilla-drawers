import { Drawer } from "./index.ts";

document.addEventListener("DOMContentLoaded", init);

function init(_) {
	window.app.drawers.init();
	window.app.drawers.get("example-2").setOptions({
		onCloseConfirm: (drawer: Drawer, trigger: HTMLElement) => confirm("Are you sure?"),
		modal: false
	})
	document.querySelector("#custom-trigger")?.addEventListener("click", () => {
		window.app.drawers.open("example-3");
	});
}

