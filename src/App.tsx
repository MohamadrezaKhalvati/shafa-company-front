import { BrowserRouter, Route, Routes } from "react-router-dom"
import Company from "./components/company/company"
import Dashboard from "./components/dashboard/dashboard"
import Complication from "./components/complication/complication"
import Medicine from "./components/medicine/medicine"
import Patient from "./components/patient/patient"
import Pharmacy from "./components/pharmacy/pharmacy"
import Panel from "./pages/Panel/panel"
import React from "react"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Panel></Panel>}>
					<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
					<Route
						path="/complication"
						element={<Complication></Complication>}
					></Route>
					<Route path="/company" element={<Company></Company>}></Route>
					<Route path="/pharmacy" element={<Pharmacy></Pharmacy>}></Route>
					<Route path="/medicine" element={<Medicine></Medicine>}></Route>
					<Route path="/patient" element={<Patient></Patient>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
