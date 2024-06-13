export default function UserCard(props) {
    props = {
        name: "John Doe",
        age: 44
    }
    return (
        <div className="card p-3">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.age}</p>
            </div>
        </div>
    )
}