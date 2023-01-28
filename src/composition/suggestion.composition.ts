import axios from "axios"
import globalData from "./globalData.composition"

export type ReadSuggestionInputData = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	data?: {
		suggestion_topic?: String
		suggestion_date?: String
		suggestion_value?: String
	}
}
export default function useSuggestion() {
	const { serverAddress } = globalData()
	async function readSuggestion(input: ReadSuggestionInputData) {
		try {
			const { data: readSuggestionOutputData } = await axios.post(
				`${serverAddress}/medicine/readMedicine`,
				input,
			)
			return readSuggestionOutputData
		} catch (err) {
			console.log(err)
		}
	}

	return {
		readSuggestion,
	}
}
