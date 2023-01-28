import React from "react"
import Paper from "@mui/material/Paper"
import { useTheme } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import { Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import LastPageIcon from "@mui/icons-material/LastPage"
import Box from "@mui/material/Box"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import { ReadCompanyInputData } from "../../../composition/company.composition"
import useComplication, {
	ReadComplicationInputType,
} from "../../../composition/complication.composition"

interface TablePaginationActionsProps {
	count: number
	page: number
	rowsPerPage: number
	onPageChange: (
		event: React.MouseEvent<HTMLButtonElement>,
		newPage: number,
	) => void
}

type complicationDataType = {
	id: number
	duration: Date
	diseaseName: String
}

function TablePaginationActions(props: TablePaginationActionsProps) {
	const theme = useTheme()
	const { count, page, rowsPerPage, onPageChange } = props

	function handleFirstPageButtonClick(event: any) {
		onPageChange(event, 0)
	}

	function handleBackButtonClick(event: any) {
		onPageChange(event, page - 1)
	}

	function handleNextButtonClick(event: any) {
		onPageChange(event, page + 1)
	}

	function handleLastPageButtonClick(event: any) {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
	}

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	)
}

function ComplicationView() {
	function createData(rawData: any) {
		const data: any = []
		rawData.map((element: any) => {
			const obj: complicationDataType = {
				id: element.id_complications,
				diseaseName: element.complications_disease_name,
				duration: element.complications_duration,
			}
			data.push(obj)
		})
		return data
	}

	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)
	const [rows, setRows] = React.useState([])
	const { readComplication } = useComplication()
	async function readComplicationApi() {
		const readComplicationInputData: ReadComplicationInputType = {
			Data: {},
			pagination: {},
			sortBy: {},
		}

		const { data: rawData } = await readComplication(readComplicationInputData)
		const data = createData(rawData)
		setRows(data)
	}

	React.useEffect(() => {
		async function fetchData() {
			await readComplicationApi()
		}
		fetchData
	}, [])
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

	function handleChangePage(event: any, newPage: number) {
		setPage(newPage)
	}

	function handleChangeRowsPerPage(event: any) {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}
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
						All complication
					</Typography>
					<TableRow>
						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>
							disease name
						</TableCell>
						<TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="left">
							duration
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row: complicationDataType) => (
						<TableRow
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.diseaseName}
							</TableCell>
							<TableCell align="left">{row.duration.toString()}</TableCell>
						</TableRow>
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
							colSpan={3}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: {
									"aria-label": "rows per page",
								},
								native: true,
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}

export default ComplicationView
