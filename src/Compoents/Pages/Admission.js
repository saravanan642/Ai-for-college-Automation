import React from "react";
import { useNavigate } from "react-router-dom";

function AdmissionForm() {

const navigate = useNavigate();

return(

<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

<div className="bg-white w-[500px] rounded-lg shadow-lg p-6">

{/* Header */}

<div className="flex justify-between items-center mb-4">

<h2 className="text-2xl font-bold text-blue-700">
Admission Form
</h2>

<button
onClick={() => navigate("/")}
className="text-red-500 text-xl font-bold"
>
✖
</button>

</div>

<form className="space-y-3">

<input
type="text"
placeholder="Student Name"
className="w-full border p-2 rounded"
/>

<input
type="email"
placeholder="Email"
className="w-full border p-2 rounded"
/>

<input
type="tel"
placeholder="Phone Number"
className="w-full border p-2 rounded"
/>

<input
type="number"
placeholder="10th Mark Percentage"
className="w-full border p-2 rounded"
/>

<input
type="number"
placeholder="12th Mark Percentage"
className="w-full border p-2 rounded"
/>

<select className="w-full border p-2 rounded">
<option>Select Course</option>
<option>B.E Computer Science</option>
<option>B.E Electronics</option>
<option>B.Tech Information Technology</option>
</select>

<textarea
placeholder="Address"
className="w-full border p-2 rounded"
/>

<button
type="submit"
className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
>
Submit Application
</button>

</form>

</div>

</div>

)

}

export default AdmissionForm;