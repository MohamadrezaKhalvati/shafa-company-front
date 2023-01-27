import { Button, Container, TextField, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React, { useState } from "react"
import CompanyAPi, {
	createCompanyType,
} from "../../composition/company.composition"
import styles from "./styles.module.css"
function createData(name: string, calories: number, fat: number) {
	return { name, calories, fat }
}

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

// <TableContainer component={Paper}>
// 			<Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
// 				<TableHead>
// 					<Typography
// 						sx={{ flex: "1 1 ", ml: "15px" }}
// 						variant="h5"
// 						id="tableTitle"
// 						component="div"
// 					>
// 						All company
// 					</Typography>
// 					<TableRow>
// 						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>
// 							name
// 						</TableCell>
// 						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 							country
// 						</TableCell>
// 						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 							year
// 						</TableCell>
// 					</TableRow>
// 				</TableHead>
// 				<TableBody>
// 					{rows.map((row) => (
// 						<TableRow
// 							key={row.name}
// 							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// 						>
// 							<TableCell component="th" scope="row">
// 								{row.name}
// 							</TableCell>
// 							<TableCell align="left">{row.calories}</TableCell>
// 							<TableCell align="left">{row.fat}</TableCell>
// 						</TableRow>
// 					))}
// 				</TableBody>
// 			</Table>
// 		</TableContainer>

// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0),
// 	createData("Ice cream sandwich", 237, 9.0),
// 	createData("Eclair", 262, 16.0),
// 	createData("Cupcake", 305, 3.7),
// 	createData("Gingerbread", 356, 16.0),
// ]
