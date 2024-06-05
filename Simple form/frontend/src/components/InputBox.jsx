import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function InputBox({ label, placeholder, id, type, value, onChange }) {


	return (
		<div className="mb-5">
			<label
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-white"
			>
				{label}
			</label>

			{id === "phone" ? (
				<PhoneInput
        containerClass=" !rounded-lg"
        inputClass="!border-gray-600 !w-full !bg-gray-700  !placeholder-gray-400 !text-white !h-10 !rounded-lg"
        buttonClass="!bg-gray-700 !active:outline-none !hover:bg-gray-700 "
        dropdownClass="!bg-gray-700 !text-white !hover:text-black !focus:bg-gray-700 !outline-none"
        searchClass="!bg-gray-700"
				  placeholder={placeholder}
				  value={value}
				  onChange={onChange}
				  country="IN"
				/>
			) : (
				<input
					type={type}
					id={id}
					value={value}
					className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
					placeholder={placeholder}
					onChange={onChange}
					required
				/>
			)}
		</div>
	);
}

export default InputBox;
