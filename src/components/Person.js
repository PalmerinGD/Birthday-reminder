import './../class/person.css'
const Person = ({person}) => {
    return (
        <div className="profile-container">
            <div className='profile-picture'>
                <img src={person.image} alt={person.name}/>
            </div>
            <div className='profile-data'>
                <div className='profile-name'>{person.name}</div>
                <div className='profile-age'>{person.age}</div>
            </div>
        </div>
    )
}
export default Person