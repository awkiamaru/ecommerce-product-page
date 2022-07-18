export type Key<T> = keyof T

export function getTypedKeys<T extends Record<any, any>>(object: T): Key<T>[] {
	return Object.keys(object) as Key<T>[]
}
