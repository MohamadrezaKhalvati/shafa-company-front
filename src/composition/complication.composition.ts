export type CreateComplicationInputType = {
	diseaseName: String
	duration: Date
	pharmaceuticalCompanyId: number
}

export type ReadComplicationInputType = {}

export default function complicationApi() {
	async function createComplication(input: CreateComplicationInputType) {}

	async function readComplication() {}

	return {
		createComplication,
		readComplication,
	}
}
