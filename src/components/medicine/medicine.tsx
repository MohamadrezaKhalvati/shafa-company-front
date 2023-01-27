import { Button } from "@mui/material"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import styles from "./styles.module.css"
import React from "react"
import Typography from "@mui/material/Typography"

function Medicine() {
	const [name, setName] = useState()
	const [adminstration, setAdminstration] = useState()
	const [productionDate, setProductionDate] = useState()
	const [expiryDate, setExpireDate] = useState()
	const [ageLimit, setAgeLimit] = useState()
	const [company, setCompany] = useState()

	function handleChangeName(event: any) {
		setName(event.target.value)
	}

	function handleChangeAdminstration(event: any) {
		setAdminstration(event.target.value)
	}

	function handleChangeProductionDate(event: any) {
		setProductionDate(event.target.value)
	}

	function handleChangeExpiryDate(event: any) {
		setExpireDate(event.target.value)
	}

	function handleChangeAgeLimit(event: any) {
		setAgeLimit(event.target.value)
	}

	function handleChangeCompany(event: any) {
		setCompany(event.target.value)
	}

	function createMedicine() {}

	return (
		<Container fixed sx={{ bgcolor: "#FFFFFF", height: "70vh" }}>
			<Typography sx={{ color: "#363740", pt: "20px", pl: "12px" }}>
				Add new medicine
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
						onChange={handleChangeAdminstration}
						value={adminstration}
						id="outlined-basic"
						label="adminstration"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={productionDate}
						onChange={handleChangeProductionDate}
						id="outlined-basic"
						label="production date"
						variant="outlined"
					/>
					<TextField
						required
						value={expiryDate}
						onChange={handleChangeExpiryDate}
						id="outlined-basic"
						label="expiry date"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={ageLimit}
						onChange={handleChangeAgeLimit}
						id="outlined-basic"
						label="age limit"
						variant="outlined"
					/>
					<TextField
						required
						value={company}
						onChange={handleChangeCompany}
						id="outlined-basic"
						label="company"
						variant="outlined"
					/>
				</div>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						onClick={createMedicine}
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

export default Medicine
