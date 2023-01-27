import { Button, Container, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import CompanyAPi, {
	createCompanyType,
} from "../../../composition/company.composition"
import styles from "./styles.module.css"

function Company() {
	const { createCompany } = CompanyAPi()
	const [name, setName] = useState<String>("")
	const [establishedyear, setEstablishedYear] = useState()
	const [location, setLocation] = useState<String>("")
	const [country, setCountry] = useState<String>("")

	function handleChangeName(event: any) {
		setName(event.target.value)
	}
	function handleChangeCountry(event: any) {
		setCountry(event.target.value)
	}
	function handleChangeEstablishedYear(event: any) {
		setEstablishedYear(event.target.value)
	}
	function handleChangeLocation(event: any) {
		setLocation(event.target.value)
	}

	async function handleCreateCompany() {
		const createCompanyInputData: createCompanyType = {
			country: country,
			establishedYear: establishedyear || new Date(),
			location: location,
			name: name,
		}
		await createCompany(createCompanyInputData)
	}
	return (
		<Container fixed sx={{ bgcolor: "#FFFFFF", height: "70vh" }}>
			<Typography sx={{ color: "#363740", pt: "20px", pl: "12px" }}>
				Add new company
			</Typography>
			<div className={styles.makeToColumn}>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={name}
						onChange={handleChangeName}
						id="outlined-basic"
						label="name"
						variant="outlined"
					/>
					<TextField
						required
						onChange={handleChangeEstablishedYear}
						value={establishedyear}
						id="outlined-basic"
						label="established year"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={location}
						onChange={handleChangeLocation}
						id="outlined-basic"
						label="location"
						variant="outlined"
					/>
					<TextField
						required
						value={country}
						onChange={handleChangeCountry}
						id="outlined-basic"
						label="country"
						variant="outlined"
					/>
				</div>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						onClick={handleCreateCompany}
						type="submit"
						sx={{
							fontFamily: "Light",
							marginBottom: "20px",
							backgroundColor: "#363740",
							borderRadius: "10px",
						}}
					>
						Submit
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default Company
