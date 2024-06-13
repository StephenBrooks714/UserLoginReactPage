function Message(props) {
    props = {
        message: "Hello World!"
    }
    return (
        <div className="alert text-center alert-primary" role="alert">
            <p className={"h1"}>{props.message}</p>
        </div>
    );
}

export default Message;