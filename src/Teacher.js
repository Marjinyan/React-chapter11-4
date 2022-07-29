const Teacher = ({name, age, skills}) => {
    return <div className="teacher">
        <h3>{name}, {age} years old</h3>
        <p>{skills.join(", ")}</p>
    </div>
}
export default Teacher