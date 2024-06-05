import React, { useState } from "react";
import Nav from "../components/Nav";
import InputBox from "../components/InputBox";

function HomePage() {
    const [form, setForm] = useState({
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        phone   : "",
        country : "",
        city   : ""
    })
	return (
		<div>
			<Nav text="Fill the Survey Form" />

			<form className="max-w-md mx-auto">
				<InputBox 
                    label="FirstName"
                    placeholder="Hello"
                    id="firstname"
                    type="text"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                />
				<InputBox
                    label="LastName"
                    placeholder="World"
                    id="lastname"
                    type="text"
                    value={form.lastname}
                    onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                />
                <InputBox
                    label="Username"
                    placeholder="username"
                    id="username"
                    type="text"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}   
                />
                <InputBox 
                    label="Email"
                    placeholder="test@text.com"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <InputBox 
                    label="Password"
                    placeholder="password"
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <InputBox 
                    label="Phone"
                    placeholder="1234567890"
                    id="phone"
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <InputBox 
                    label="Country"
                    placeholder="India"
                    id="country"
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                />
                <InputBox 
                    label="City"
                    placeholder="Mumbai"
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
                
				<button
					type="submit"
					className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				> 
					Submit
				</button>
			</form>
		</div>
	);
}

export default HomePage;
