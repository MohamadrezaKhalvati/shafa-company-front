import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography } from "@mui/material"

function TableComponent(props: any) {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{
					minWidth: 650,
				}}
				aria-label="simple table"
			>
				<TableHead>
					<Typography
						sx={{ flex: "1 1 100%" }}
						variant="h6"
						id="tableTitle"
						component="div"
					>
						All device
					</Typography>
					<TableRow>
						{props.column.map((element: any) => {
							;<TableCell align="right">{element.title}</TableCell>
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{props.rows.map((row: any) => (
						<TableRow
							key={row.name}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right"> {row.calories}</TableCell>
							<TableCell align="right"> {row.fat}</TableCell>
							<TableCell align="right"> {row.carbs}</TableCell>
							<TableCell align="right"> {row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default TableComponent
