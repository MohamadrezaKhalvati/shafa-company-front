export type readCompanyType = {}
export type createCompanyType = {
	name: String
	establishedYear: Date
	location: String
	country: String
}
export default function CompanyAPi() {
	async function createCompany(input: createCompanyType) {
		console.log(input)
	}

	async function readCompany(input: readCompanyType) {}

	return {
		readCompany,
		createCompany,
	}
}
