import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SignUpCompany = props => {
	const { actions } = useContext(Context);
	const [address, setAddress] = useState("");
	const [companyDescription, setCompanyDescription] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="backColor">
			<div className="side2">
				<img src="https://i.imgur.com/8N3EJbL.jpg" className="imgComp" alt="..." />
			</div>
			<div className="side1">
				<div
					className="sign p-3"
					style={{ width: "80%", height: "auto", marginLeft: "0", marginRight: "0", display: "block" }}>
					<h1 className="text-center mt-2">Sign Up Your Company</h1>
					<Link to="/signupuser">
						<button className="btn btn-primary form-control" style={{ width: "100px" }}>
							User
						</button>
					</Link>
					<div>
						<div className="form-group">
							<label>{"Email"}</label>

							<input
								type="text"
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
								className="form-control"
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="text"
								defaultValue={password}
								onChange={e => setPassword(e.target.value)}
								className="form-control"
								placeholder="Enter Your Password"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								defaultValue={address}
								onChange={e => setAddress(e.target.value)}
								className="form-control"
								placeholder="Enter Your Company Address"
							/>
						</div>
						<div className="form-group">
							<label>Company Name</label>
							<input
								type="text"
								defaultValue={companyName}
								onChange={e => setCompanyName(e.target.value)}
								className="form-control"
								placeholder="Enter Your Company's Name"
							/>
						</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							type="text"
							className="form-control"
							defaultValue={companyDescription}
							onChange={e => setCompanyDescription(e.target.value)}
							// helperText={"You have " + (maxLength - descritption.length) + " left"}
							placeholder="What's Your Company About?"
						/>
						{/* <p className="textLeft">
								{"You have "} {maxLength - description.length} {" left"}
							</p> */}
					</div>

					{/* This button is where it goes the POST method */}
					<button
						style={{ width: "100px" }}
						type="button"
						onClick={() => {
							actions.createCompany(
								address,
								companyDescription,
								companyName,
								email,
								password,
								props.history
							);
						}}
						className="btn btn-primary form-control mr-5">
						Create
					</button>

					{/* Underlined prase instead of button? 'Already Member' */}
					<Link to="/login">
						<button className="btn btn-primary form-control" style={{ width: "100px" }}>
							Member
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
SignUpCompany.propTypes = {
	history: PropTypes.object
};
