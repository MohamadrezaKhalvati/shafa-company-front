import { Button, Container, TextField, Typography } from "@mui/material"
import styles from "./styles.module.css"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React, { useState } from "react"
import complicationApi, {
	CreateComplicationInputType,
} from "../../composition/complication.composition"

function createData(name: string, calories: number, fat: number) {
	return { name, calories, fat }
}

function Complication() {
	const [diseaseName, setDiseaseName] = useState("")
	const [duration, setDuration] = useState()
	const [pharmaceuticalCompanyName, setPharmaceuticalCompanyName] = useState()
	const { createComplication } = complicationApi()
	function handleChangeDiseaseName(event: any) {
		setDiseaseName(event.target.value)
	}
	function handleChangeDuration(event: any) {
		setDuration(event.target.value)
	}
	function handleChangePharmaceuticalCompanyName(event: any) {
		setPharmaceuticalCompanyName(event.target.value)
	}

	async function handleCreateComplication() {
		const createComplicationInputData: CreateComplicationInputType = {
			diseaseName: diseaseName,
			duration: duration || new Date(),
			pharmaceuticalCompanyId: pharmaceuticalCompanyName || 0,
		}
		await createComplication(createComplicationInputData)
	}
	return (
		<Container fixed sx={{ bgcolor: "#FFFFFF", height: "70vh" }}>
			<Typography sx={{ color: "#363740", pt: "20px", pl: "12px" }}>
				Add new complication
			</Typography>
			<div className={styles.makeToColumn}>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={diseaseName}
						onChange={handleChangeDiseaseName}
						id="outlined-basic"
						label="name"
						variant="outlined"
					/>
					<TextField
						required
						onChange={duration}
						value={handleChangeDuration}
						id="outlined-basic"
						label="established year"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRowSingle}>
					<TextField
						required
						value={pharmaceuticalCompanyName}
						onChange={handleChangePharmaceuticalCompanyName}
						id="outlined-basic"
						label="address"
						variant="outlined"
					/>
				</div>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						onClick={handleCreateComplication}
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

export default Complication

// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0),
// 	createData("Ice cream sandwich", 237, 9.0),
// 	createData("Eclair", 262, 16.0),
// 	createData("Cupcake", 305, 3.7),
// 	createData("Gingerbread", 356, 16.0),
// ]

// <TableContainer component={Paper}>
// 		<Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
// 			<TableHead>
// 				<Typography
// 					sx={{ flex: "1 1 ", ml: "15px" }}
// 					variant="h5"
// 					id="tableTitle"
// 					component="div"
// 				>
// 					All Complications
// 				</Typography>
// 				<TableRow>
// 					<TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>
// 						name
// 					</TableCell>
// 					<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 						price
// 					</TableCell>
// 					<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
// 						production date
// 					</TableCell>
// 				</TableRow>
// 			</TableHead>
// 			<TableBody>
// 				{rows.map((row) => (
// 					<TableRow
// 						key={row.name}
// 						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// 					>
// 						<TableCell component="th" scope="row">
// 							{row.name}
// 						</TableCell>
// 						<TableCell align="left">{row.calories}</TableCell>
// 						<TableCell align="left">{row.fat}</TableCell>
// 					</TableRow>
// 				))}
// 			</TableBody>
// 		</Table>
// 	</TableContainer>
