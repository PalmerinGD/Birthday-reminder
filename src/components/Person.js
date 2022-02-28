const Person = ({person}) => {
    return (
        <div className="">
            <img src={person.image} alt={person.name}/>
            <div>{person.name}</div>
            <div>{person.age}</div>
        </div>
    )
}
export default Person