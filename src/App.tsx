import Panel from "./pages/Panel/panel"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashboard/dashboard"
import Device from "./components/device/device"
import Company from "./components/company/company"
import Pharmacy from "./components/pharmacy/pharmacy"
import Medicine from "./components/medicine/medicine"
import Patient from "./components/patient/patient"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Panel></Panel>}>
					<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
					<Route path="/device" element={<Device></Device>}></Route>
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
