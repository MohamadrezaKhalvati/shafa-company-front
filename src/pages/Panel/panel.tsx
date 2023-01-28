import BusinessIcon from "@mui/icons-material/Business"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import MedicationIcon from "@mui/icons-material/Medication"
import MenuIcon from "@mui/icons-material/Menu"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import { CssBaseline, ListItemIcon } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { styled, useTheme } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Company from "../../components/company/companyInsert/companyInsert"
import Dashboard from "../../components/dashboard/dashboard"
import Complication from "../../components/complication/complicationInsert/complicationInsert"
import Medicine from "../../components/medicine/medicineInsert/medicineInsert"
import Patient from "../../components/patient/patientInsert/patientInsert"
import Pharmacy from "../../components/pharmacy/pharmacyInsert/pharmacyInsert"
import PatientView from "../../components/patient/patientSelect/patientSelect"
import CompanyView from "../../components/company/companySelect/companySelect"
import ComplicationView from "../../components/complication/complicationSelect/complicationSelect"
import PharmacyView from "../../components/pharmacy/pharmacySelect/pharmacySelect"
import MedicineView from "../../components/medicine/medicineSelect/medicineSelect"
import SuggestionView from "../../components/suggestion/suggestionSelect"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}))

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}))

export default function PersistentDrawerLeft() {
	const theme = useTheme()
	const navigate = useNavigate()
	const location = useLocation()

	let headerTitle = location.pathname.substring(
		location.pathname.indexOf("/") + 1,
		location.pathname.lastIndexOf("/"),
	)
	headerTitle === "/"
		? (headerTitle = "Dashboard")
		: (headerTitle = headerTitle)

	React.useEffect(() => {
		navigate("/dashboard")
	}, [])
	const drawerData = [
		{
			title: "dashboard",
			icon: <DashboardIcon />,
			redirect: "/dashboard",
		},
		{
			title: "complication",
			icon: <PrecisionManufacturingIcon />,
			redirect: "/complication/insert",
		},
		{
			title: "company",
			icon: <BusinessIcon />,
			redirect: "/company/insert",
		},
		{
			title: "pharmacy",
			icon: <MedicationIcon />,
			redirect: "/pharmacy/insert",
		},
		{
			title: "medicine",
			icon: <VaccinesIcon />,
			redirect: "/medicine/insert",
		},
		{
			title: "patient",
			icon: <GroupAddIcon />,
			path: "string",
			redirect: "/patient/insert",
		},
	]

	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} sx={{ backgroundColor: "#363740" }}>
				<Toolbar>
					<IconButton
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ color: "#DDE2FF", mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{ color: "DDE2FF" }}
						variant="h6"
						noWrap
						component="div"
					>
						{headerTitle}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader
					sx={{
						backgroundColor: "#363740",
						display: "flex",
						justifyContent: "space-evenly",
					}}
				>
					<Typography sx={{ color: "#DDE2FF" }}>shafa system</Typography>
					<IconButton onClick={handleDrawerClose} sx={{ color: "#DDE2FF" }}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List
					sx={{ backgroundColor: "#363740", width: "100%", height: "100%" }}
				>
					{drawerData.map((element) => (
						<ListItem
							key={element.title}
							disablePadding
							sx={{ color: "#DDE2FF" }}
						>
							<ListItemButton onClick={() => navigate(element.redirect)}>
								<ListItemIcon sx={{ color: "#DDE2FF" }}>
									{element.icon}
								</ListItemIcon>
								<ListItemText primary={element.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route
						path="/complication/insert"
						element={<Complication></Complication>}
					></Route>
					<Route
						path="/complication/view"
						element={<ComplicationView></ComplicationView>}
					></Route>
					<Route path="/company/insert" element={<Company></Company>}></Route>
					<Route
						path="/company/view"
						element={<CompanyView></CompanyView>}
					></Route>
					<Route
						path="/pharmacy/insert"
						element={<Pharmacy></Pharmacy>}
					></Route>
					<Route
						path="/pharmacy/view"
						element={<PharmacyView></PharmacyView>}
					></Route>
					<Route
						path="/medicine/insert"
						element={<Medicine></Medicine>}
					></Route>
					<Route
						path="/medicine/view"
						element={<MedicineView></MedicineView>}
					></Route>
					<Route path="/patient/insert" element={<Patient></Patient>}></Route>
					<Route
						path="/patient/view"
						element={<PatientView></PatientView>}
					></Route>

					<Route
						path="/suggestion/view"
						element={<SuggestionView></SuggestionView>}
					></Route>
				</Routes>
			</Main>
		</Box>
	)
}
