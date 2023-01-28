import axios from "axios"
import globalData from "./globalData.composition"
export type CreatePatientInputType = {
	Data: {
		patient_name: String
		patient_last_name: String
		patient_gender: String
		patient_age: number
		patient_identification_id: String
		patient_blood_type: String
		patient_birthday: Date
		patient_phone_number: String
	}
}

export type ReadPatientInputType = {
	pagination?: {
		take?: number
		skip?: number
	}
	sortBy?: {
		field?: String
		descending?: Boolean
	}
	Data?: {
		id_patient?: number
		patient_name?: String
		patient_last_name?: String
		patient_gender?: String
		patient_age?: number
		patient_identification_id?: String
		patient_blood_type?: String
		patient_birthday?: String
	}
}

export default function usePatient() {
	const { serverAddress } = globalData()

	async function createPatient(input: CreatePatientInputType) {
		try {
			const { data: createPatientDataOuput } = await axios.post(
				`${serverAddress}/patient/createPatient`,
				input,
			)

			return createPatientDataOuput
		} catch (err) {
			console.log(err)
		}
	}

	async function readPatient(input: ReadPatientInputType) {
		try {
			const { data: readPatientDataOutput } = await axios.post(
				`${serverAddress}/patient/readPatient`,
				input,
			)
			return readPatientDataOutput
		} catch (err) {
			console.log(err)
		}
	}

	return {
		createPatient,
		readPatient,
	}
}
