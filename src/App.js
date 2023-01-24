import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import React from "react"
import Panel from "./pages/Panel/panel.tsx"
import Compnay from "./components/company/company"
import Dashboard from "./components/dashboard/dashboard"
import Device from "./components/device/device"
import Medicine from "./components/medicine/medicine"
import Patient from "./components/patient/patient"
import Pharmacy from "./components/pharmacy/pharmacy"
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Panel></Panel>}>
						<Route path="/company" element={<Compnay></Compnay>}></Route>
						<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
						<Route path="/device" element={<Device></Device>}></Route>
						<Route path="/medicine" element={<Medicine></Medicine>}></Route>
						<Route path="/patient" element={<Patient></Patient>}></Route>
						<Route path="/pharmacy" element={<Pharmacy></Pharmacy>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
