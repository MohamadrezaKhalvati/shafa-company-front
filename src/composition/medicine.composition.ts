import axios from "axios"
import globalData from "./globalData.composition"
export type CreateMedicineInputType = {
	Data: {
		medicine_name: String
		medicine_adminstration: String
		medicine_production_date: Date
		medicine_expiry_date: Date
		medicine_age_limit: String
		id_company: number
		medicine_content: {
			value: String
		}
	}
}

export type ReadMedicineInputType = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	Data?: {
		id_medicine?: number
		medicine_name?: String
		medicine_adminstration?: String
		medicine_production_date?: String
		medicine_expiry_date?: String
		medicine_age_limit?: String
		id_company?: number
	}
}
export default function useMedicine() {
	const { serverAddress } = globalData()

	async function createMedicine(input: CreateMedicineInputType) {
		try {
			const { data: createMedicineOutput } = await axios.post(
				`${serverAddress}/medicine/createMedicine`,
				input,
			)

			return createMedicineOutput
		} catch (err) {
			console.log(err)
		}
	}

	async function readMedicine(input: ReadMedicineInputType) {
		try {
			const { data: readMedicineOutput } = await axios.post(
				`${serverAddress}/medicine/readMedicine`,
				input,
			)
			console.log(readMedicineOutput)

			return readMedicineOutput
		} catch (err) {
			console.log(err)
		}
	}

	return {
		createMedicine,
		readMedicine,
	}
}
