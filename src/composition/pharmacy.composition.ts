import axios from "axios"
import globalData from "./globalData.composition"

export type CreatePharmacyInputType = {
	Data: {
		pharmacy_name: String
		pharmacy_established_year: Date
		pharmacy_branch: String
		pharmacy_address: String
		pharmacy_phone_number: String
	}
}

export type ReadPharmacyInputType = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	data?: {
		id_pharmaceuticalCompany?: number
		pharmaceuticalCompany_name?: String
		pharmaceuticalCompany_established_year?: Date
		pharmaceuticalCompany_locadtion?: String
		pharmaceuticalCompany_country?: String
	}
}

export default function usePharmacy() {
	const { serverAddress } = globalData()

	async function createPharmcy(input: CreatePharmacyInputType) {
		try {
			const { data: createPharmacyOutputData } = await axios.post(
				`${serverAddress}/pharmacy/createPharmacy`,
				input,
			)
			return createPharmacyOutputData
		} catch (err) {
			console.log(err)
		}
	}

	async function readPharmacy(input: ReadPharmacyInputType) {
		try {
			const { data: readPharmacyOutputData } = await axios.post(
				`${serverAddress}/pharmacy/readPharmacy`,
				input,
			)
			return readPharmacyOutputData
		} catch (err) {
			console.log(err)
		}
	}

	return {
		createPharmcy,
		readPharmacy,
	}
}
