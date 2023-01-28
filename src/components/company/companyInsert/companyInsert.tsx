import { Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import CompanyAPi, {
	CreateCompanyInputData,
} from "../../../composition/company.composition"
import styles from "./styles.module.css"
import React from "react"
function Company() {
	const { createCompany } = CompanyAPi()
	const [name, setName] = useState("")
	const [establishedyear, setEstablishedYear] = useState("")
	const [location, setLocation] = useState("")
	const [country, setCountry] = useState("")

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
		const createCompanyInputData: CreateCompanyInputData = {
			data: {
				pharmaceuticalCompany_country: country,
				pharmaceuticalCompany_established_year: new Date(establishedyear),
				pharmaceuticalCompany_locadtion: location,
				pharmaceuticalCompany_name: name,
			},
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
