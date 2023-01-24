import * as React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { DeferredData } from "@remix-run/router/dist/utils"

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}))

function StackBox(props: any) {
	return (
		<div>
			<Stack direction="row" spacing={2}>
				<Item>{props.name}</Item>
			</Stack>
		</div>
	)
}

export default StackBox
