import { useState } from "react";

function Contact(){
    const[form, setForm]=useState({ name: "", email: ""});
    const[error, setError]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email){
            setError("Fill in all fields");
            return;
        }

        setError("");
        alert("Complete!");
    };


    return(
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Name"
                onChange={(e) => setForm({...form, name: e.target.value })}/>
            <input
                placeholder="Email"
                onChange={(e) => setForm({...form, email: e.target.value })}/>    

            <button type="Submit">Submit</button>
            {error && <p>{error}</p>}    
        </form>
    );
}


export default Contact;