import { useEffect, useState } from "react"
import useMedicine, {
	ReadMedicineInputType,
} from "../../composition/medicine.composition"
import usePatient, {
	ReadPatientInputType,
} from "../../composition/patient.composition"
import CardComponent from "../../shared/card/card"
import styles from "./styles.module.css"
import React from "react"
import usePharmacy, {
	ReadPharmacyInputType,
} from "../../composition/pharmacy.composition"
import useCompany, {
	ReadCompanyInputData,
} from "../../composition/company.composition"
import useComplication, {
	ReadComplicationInputType,
} from "../../composition/complication.composition"
import useSuggestion, {
	ReadSuggestionInputData,
} from "../../composition/suggestion.composition"
function Dashboard() {
	const { readPatient } = usePatient()
	const { readMedicine } = useMedicine()
	const { readPharmacy } = usePharmacy()
	const { readCompany } = useCompany()
	const { readComplication } = useComplication()
	const { readSuggestion } = useSuggestion()
	const [pharmacyCount, setPharmacyCount] = useState(0)
	const [medicineCount, setMedicineCount] = useState(0)
	const [suggestionCount, setSuggestionCount] = useState(4)
	const [companyCount, setCompanyCount] = useState(0)
	const [patientCount, setPatientCount] = useState(0)
	const [complicationCount, setComplicationCount] = useState(0)

	async function readSuggestionApi() {
		const readSuggestionInputData: ReadSuggestionInputData = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readSuggestion(readSuggestionInputData)
		return data.count
	}
	async function readComplicationApi() {
		const readComplicationInputData: ReadComplicationInputType = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readComplication(readComplicationInputData)
		return data.count
	}
	async function readPharmacyApi() {
		const readPharmacyInputData: ReadPharmacyInputType = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readPharmacy(readPharmacyInputData)
		return data.count
	}

	async function readPatientApi() {
		const readPatientInputData: ReadPatientInputType = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readPatient(readPatientInputData)
		return data.count
	}

	async function readMedicineApi() {
		const readMedicineInputData: ReadMedicineInputType = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readMedicine(readMedicineInputData)
		return data.count
	}

	async function readCompanyApi() {
		const readCompanyInputData: ReadCompanyInputData = {
			Data: {},
			pagination: {},
			sortBy: {},
		}
		const data = await readCompany(readCompanyInputData)
		return data.count
	}
	useEffect(() => {
		async function fetchData() {
			setPatientCount(await readPatientApi())
			setMedicineCount(await readMedicineApi())
			setPharmacyCount(await readPharmacyApi())
			setCompanyCount(await readCompanyApi())
			setComplicationCount(await readComplicationApi())
			setSuggestionCount(await readSuggestionApi())
		}
		fetchData()
	}, [])
	return (
		<div className={styles.makeToColumn}>
			<div className={styles.makeToRow}>
				<CardComponent
					title="pharmacy"
					count={pharmacyCount}
					path="/pharmacy/view"
				></CardComponent>
				<CardComponent
					title="complication"
					path="/complication/view"
					count={complicationCount}
				></CardComponent>
			</div>
			<div className={styles.makeToRow}>
				<CardComponent
					title="medicine"
					count={medicineCount}
					path="/medicine/view"
				></CardComponent>
				<CardComponent
					title="suggestion"
					path="/suggestion/view"
					count={suggestionCount}
				></CardComponent>
			</div>
			<div className={styles.makeToRow}>
				<CardComponent
					title="company"
					count={companyCount}
					path="/company/view"
				></CardComponent>
				<CardComponent
					title="patient"
					count={patientCount}
					path="/patient/view"
				></CardComponent>
			</div>
		</div>
	)
}

export default Dashboard
