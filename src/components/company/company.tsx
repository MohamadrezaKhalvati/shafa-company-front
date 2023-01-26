import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React from "react"

function createData(name: string, calories: number, fat: number) {
	return { name, calories, fat }
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0),
	createData("Ice cream sandwich", 237, 9.0),
	createData("Eclair", 262, 16.0),
	createData("Cupcake", 305, 3.7),
	createData("Gingerbread", 356, 16.0),
]

function Company() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
				<TableHead>
					<Typography
						sx={{ flex: "1 1 ", ml: "15px" }}
						variant="h5"
						id="tableTitle"
						component="div"
					>
						All company
					</Typography>
					<TableRow>
						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>
							name
						</TableCell>
						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
							country
						</TableCell>
						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
							year
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="left">{row.calories}</TableCell>
							<TableCell align="left">{row.fat}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Company
