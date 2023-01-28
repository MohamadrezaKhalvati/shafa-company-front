import axios from "axios"
import globalData from "./globalData.composition"

export type ReadCompanyInputData = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	Data?: {
		id_pharmaceuticalCompany?: number
		pharmaceuticalCompany_name?: String
		pharmaceuticalCompany_established_year?: Date
		pharmaceuticalCompany_locadtion?: String
		pharmaceuticalCompany_country?: String
	}
}
export type CreateCompanyInputData = {
	data: {
		pharmaceuticalCompany_name: String
		pharmaceuticalCompany_established_year: Date
		pharmaceuticalCompany_locadtion: String
		pharmaceuticalCompany_country: String
	}
}
export default function useCompany() {
	const { serverAddress } = globalData()
	async function createCompany(input: CreateCompanyInputData) {
		try {
			const { data: createCompanyOutputData } = await axios.post(
				`${serverAddress}/company/createCompany`,
				input,
			)
			return createCompanyOutputData
		} catch (err) {
			console.log(err)
		}
	}

	async function readCompany(input: ReadCompanyInputData) {
		try {
			const { data: readCompanyOutputData } = await axios.post(
				`${serverAddress}/company/readCompany`,
				input,
			)
			return readCompanyOutputData
		} catch (err) {
			console.log(err)
		}
	}

	return {
		readCompany,
		createCompany,
	}
}
