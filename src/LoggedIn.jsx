
import React, {
    useState
}
    from "react";
export default function LoggedIn(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // Event handlers to update state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
    };
    if(props.isLoggedIn) {
        props = {
            isLoggedIn: true,
            messageTrue: "Welcome Back"
        }
    } else {
        props = {
            isLoggedOut: true,
            messageFalse: "Please Login"
        }
        return(
            <>
                <h1>{props.messageFalse}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label>Name:</label>
                        <input
                            type="text"
                            className={"form-control"}
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Email:</label>
                        <input
                            type="email"
                            className={"form-control"}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button className={"btn btn-primary"} type="submit">Submit</button>
                </form>
            </>
        )
    }
}