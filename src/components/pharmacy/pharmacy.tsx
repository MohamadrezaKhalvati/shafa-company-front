import { Button, Container, TextField, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React, { useState } from "react"
import pharmacyApi, {
	CreatePharmacyInputType,
} from "../../composition/pharmacy.composition"
import styles from "./styles.module.css"
function createData(name: string, calories: number, fat: number) {
	return { name, calories, fat }
}

function Pharmacy() {
	const [name, setName] = useState("")
	const [establishedyear, setEstablishedYear] = useState()
	const [address, setAddress] = useState("")
	const [branch, setBranch] = useState()
	const [phoneNumber, setPhoneNumber] = useState()
	const { createPharmcy } = pharmacyApi()
	function handleChangeName(event: any) {
		setName(event.target.value)
	}

	function handleChangeEstablishedYear(event: any) {
		setEstablishedYear(event.target.value)
	}

	function handleChangeAddress(event: any) {
		setAddress(event.target.value)
	}

	function handleChangeBranch(event: any) {
		setBranch(event.target.value)
	}

	function handleChangePhoneNumber(event: any) {
		setPhoneNumber(event.target.value)
	}

	async function handleCreatePharmacy() {
		const createPharmacyInput: CreatePharmacyInputType = {
			name: name,
			address: address,
			establishedYear: establishedyear || new Date(),
			branch: branch,
			phoneNumber: phoneNumber,
		}

		await createPharmcy(createPharmacyInput)
	}

	return (
		<Container fixed sx={{ bgcolor: "#FFFFFF", height: "70vh" }}>
			<Typography sx={{ color: "#363740", pt: "20px", pl: "12px" }}>
				Add new pharmacy
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
						value={address}
						onChange={handleChangeAddress}
						id="outlined-basic"
						label="address"
						variant="outlined"
					/>
					<TextField
						value={branch}
						onChange={handleChangeBranch}
						id="outlined-basic"
						label="branch"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRowSingle}>
					<TextField
						value={phoneNumber}
						onChange={handleChangePhoneNumber}
						id="outlined-basic"
						label="phone number"
						variant="outlined"
					/>
				</div>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						onClick={handleCreatePharmacy}
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

export default Pharmacy

// <TableContainer component={Paper}>
// 	<Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
// 		<TableHead>
// 			<Typography
// 				sx={{ flex: "1 1 ", ml: "15px" }}
// 				variant="h5"
// 				id="tableTitle"
// 				component="div"
// 			>
// 				All pharmacy
// 			</Typography>
// 			<TableRow>
// 				<TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>
// 					name
// 				</TableCell>
// 				<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 					address
// 				</TableCell>
// 				<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 					established year
// 				</TableCell>
// 			</TableRow>
// 		</TableHead>
// 		<TableBody>
// 			{rows.map((row) => (
// 				<TableRow
// 					key={row.name}
// 					sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// 				>
// 					<TableCell component="th" scope="row">
// 						{row.name}
// 					</TableCell>
// 					<TableCell align="left">{row.calories}</TableCell>
// 					<TableCell align="left">{row.fat}</TableCell>
// 				</TableRow>
// 			))}
// 		</TableBody>
// 	</Table>
// </TableContainer>
// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0),
// 	createData("Ice cream sandwich", 237, 9.0),
// 	createData("Eclair", 262, 16.0),
// 	createData("Cupcake", 305, 3.7),
// 	createData("Gingerbread", 356, 16.0),
// ]
