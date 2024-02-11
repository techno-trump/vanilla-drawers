export function getTargetElem(target: Element | string) {
	if (target instanceof Element) {
		return target;
	} else {
		return document.querySelector(target);
	}
}
export function isObject(target: any): target is Object {
	return typeof target === "object" && target != null;
}
export function isFunction(target: any): target is Function {
	return typeof target === "function";
}
export function isArray(target: any): target is Array<any> {
  return target instanceof Array;
}
export async function delay(duration: number) {
	return await new Promise((resolve) => setTimeout(resolve, duration));
}