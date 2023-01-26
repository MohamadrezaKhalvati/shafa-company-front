import { Button, Container, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import styles from "./styles.module.css"

function Patient(props: any) {
	const [name, setName] = useState()
	const [lastName, setLastName] = useState()
	const [gender, setGender] = useState()
	const [age, setAge] = useState()
	const [birthday, setBirthday] = useState()
	const [bloodType, setBloodType] = useState()
	const [diseaseBackground, setDiseaseBackground] = useState()
	const [identificationId, setIdentificationId] = useState()
	const [phoneNumber, setPhoneNumber] = useState()

	function handleChangeName(event: any) {
		setName(event.target.value)
	}

	function handleChangeLastName(event: any) {
		setLastName(event.target.value)
	}

	function handleChangeGender(event: any) {
		setGender(event.target.value)
	}

	function handleChangeAge(event: any) {
		setAge(event.target.value)
	}

	function handleChangeBirthday(event: any) {
		setBirthday(event.target.value)
	}

	function handleChangeBloodType(event: any) {
		setBloodType(event.target.value)
	}

	function handleChangeDiseaseBackground(event: any) {
		setDiseaseBackground(event.target.value)
	}

	function handlgeChangeIdentificationId(event: any) {
		setIdentificationId(event.target.value)
	}

	function handleChangePhoneNumber(event: any) {
		setPhoneNumber(event.target.value)
	}

	function createPatient() {}
	return (
		<Container fixed sx={{ bgcolor: "#FFFFFF", height: "85vh" }}>
			<Typography sx={{ color: "#363740", pt: "20px", pl: "12px" }}>
				add new patient
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
						value={gender}
						onChange={handleChangeGender}
						id="outlined-basic"
						label="gender"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={lastName}
						onChange={handleChangeLastName}
						id="outlined-basic"
						label="last name"
						variant="outlined"
					/>
					<TextField
						required
						value={birthday}
						onChange={handleChangeBirthday}
						id="outlined-basic"
						label="birthday"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={age}
						onChange={handleChangeAge}
						id="outlined-basic"
						label="age"
						variant="outlined"
					/>
					<TextField
						required
						value={bloodType}
						onChange={handleChangeBloodType}
						id="outlined-basic"
						label="blood Type"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRow}>
					<TextField
						required
						value={diseaseBackground}
						onChange={handleChangeDiseaseBackground}
						id="outlined-basic"
						label="disease Background"
						variant="outlined"
					/>
					<TextField
						required
						value={identificationId}
						onChange={handlgeChangeIdentificationId}
						id="outlined-basic"
						label="identification Id"
						variant="outlined"
					/>
				</div>
				<div className={styles.makeToRowSingle}>
					<TextField
						required
						value={phoneNumber}
						onChange={handleChangePhoneNumber}
						id="outlined-basic"
						label="phone Number"
						variant="outlined"
					/>
				</div>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						onClick={createPatient}
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

export default Patient
