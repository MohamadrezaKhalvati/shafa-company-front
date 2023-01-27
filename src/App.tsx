import { BrowserRouter, Route, Routes } from "react-router-dom"
import Company from "./components/company/companyInsert/companyInsert"
import Dashboard from "./components/dashboard/dashboard"
import Complication from "./components/complication/complicationInsert/complicationInsert"
import Medicine from "./components/medicine/medicineInsert/medicineInsert"
import Patient from "./components/patient/patientInsert/patientInsert"
import Pharmacy from "./components/pharmacy/pharmacyInsert/pharmacyInsert"
import Panel from "./pages/Panel/panel"
import React from "react"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Panel></Panel>}>
					<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
					<Route
						path="/complication/insert"
						element={<Complication></Complication>}
					></Route>
					<Route path="/company/insert" element={<Company></Company>}></Route>
					<Route
						path="/pharmacy/insert"
						element={<Pharmacy></Pharmacy>}
					></Route>
					<Route
						path="/medicine/insert"
						element={<Medicine></Medicine>}
					></Route>
					<Route path="/patient/insert" element={<Patient></Patient>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
