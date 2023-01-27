import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
function CardComponent(props: any) {
	const navigate = useNavigate()
	return (
		<Card
			variant="outlined"
			className={styles.cardBox}
			onClick={() => navigate(props.path)}
		>
			<CardContent className={styles.CardContent}>
				<Typography
					sx={{ mt: 1.5, color: "#3751FF", fontWeight: "bold" }}
					variant="h5"
					component="div"
					className={styles.CardContent}
				>
					{props.title}
				</Typography>
				<Typography
					sx={{ mb: 3, pt: 2, fontWeight: "bold" }}
					variant="h6"
					color="text.secondary"
					className={styles.CardContent}
				>
					{props.count}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardComponent
