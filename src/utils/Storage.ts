import { StoragePresets } from '../types/StoragePresets.ts'

export class Storage {
	key = 'coursework'

	writeAll(data: StoragePresets) {
		localStorage.setItem(this.key, JSON.stringify(data))
	}

	read() {
		const value = localStorage.getItem(this.key)

		if (!value) {
			return null
		}

		return JSON.parse(value)
	}
}
