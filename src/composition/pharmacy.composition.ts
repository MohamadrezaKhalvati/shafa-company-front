export type CreatePharmacyInputType = {
	name: String
	establishedYear: Date
	address: String
	branch?: String
	phoneNumber?: String
}

export type ReadPharmacyInputType = {}

export default function pharmacyApi() {
	async function createPharmcy(input: CreatePharmacyInputType) {}

	async function readPharmcy() {}

	return {
		createPharmcy,
		readPharmcy,
	}
}
