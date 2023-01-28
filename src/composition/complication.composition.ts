import axios from "axios"
import globalData from "./globalData.composition"

export type CreateComplicationInputType = {
	Data: {
		complications_disese_name: String
		complications_duration: String
	}
}

export type ReadComplicationInputType = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	data?: {
		id_complications?: number
		id_pharmaceuticalcompany?: number
		complications_disese_name?: number
		complications_duration?: number
	}
}

export default function useComplication() {
	const { serverAddress } = globalData()
	async function createComplication(input: CreateComplicationInputType) {
		try {
			const { data: CreateComplicationOutputData } = await axios.post(
				`${serverAddress}/complications/createcomplications`,
				input,
			)
			return CreateComplicationOutputData
		} catch (err) {
			console.log(err)
		}
	}

	async function readComplication(input: ReadComplicationInputType) {
		try {
			const { data: readComplicationOutputData } = await axios.post(
				`${serverAddress}/complications/createcomplications`,
				input,
			)
			return readComplicationOutputData
		} catch (err) {
			console.log(err)
		}
	}

	return {
		createComplication,
		readComplication,
	}
}
