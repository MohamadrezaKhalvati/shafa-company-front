import CardComponent from "../../shared/card/card"
import styles from "./styles.module.css"
import axios from "axios"

import React, { useEffect, useState } from "react"
import pharmacyApi from "../../composition/pharmacy.composition"
import medicineAPi from "../../composition/medicine.composition"
import suggestionApi from "../../composition/suggestion.composition"
import CompanyAPi from "../../composition/company.composition"
import complicationApi from "../../composition/complication.composition"
import patientApi from "../../composition/patient.composition"
function Dashboard() {
	const { readPharmcy } = pharmacyApi()
	const { readMedicine } = medicineAPi()
	const { readSuggestion } = suggestionApi()
	const { readCompany } = CompanyAPi()
	const { readComplication } = complicationApi()
	const { readPatient } = patientApi()
	const [pharmacyCount, setPharmacyCount] = useState()
	const [medicineCount, setMedicineCount] = useState()
	const [suggestionCount, setSuggestionCount] = useState()
	const [companyCount, setCompanyCount] = useState()
	const [patientCount, setPatientCount] = useState()
	const [complicationCount, setComplicationCount] = useState()

	function handleChangePharmacyCount(event: any) {
		setPharmacyCount(event.target.value)
	}
	function handleChangeMedicineCount(event: any) {
		setMedicineCount(event.target.value)
	}
	function handleChangeSuggestionCount(event: any) {
		setSuggestionCount(event.target.value)
	}
	function handleChangeCompanyCount(event: any) {
		setCompanyCount(event.target.value)
	}
	function handleChangeComplicationCount(event: any) {
		setComplicationCount(event.target.value)
	}
	function handleChangePatientCount(event: any) {
		setPatientCount(event.target.value)
	}

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
