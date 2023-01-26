import CardComponent from "../../shared/card/card"
import React from "react"
import styles from "./styles.module.css"
import Box from "@mui/material/Box"
function Dashboard() {
	return (
		<div className={styles.makeToColumn}>
			<div className={styles.makeToRow}>
				<CardComponent title="pharmacy" count="20"></CardComponent>
				<CardComponent title="order" count="20"></CardComponent>
			</div>
			<div className={styles.makeToRow}>
				<CardComponent title="medicine" count="20"></CardComponent>
				<CardComponent title="suggestion" count="20"></CardComponent>
			</div>
			<div className={styles.makeToRow}>
				<CardComponent title="company" count="20"></CardComponent>
				<CardComponent title="transportation" count="20"></CardComponent>
			</div>
		</div>
	)
}

export default Dashboard
