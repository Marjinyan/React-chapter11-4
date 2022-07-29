import {useState} from 'react'

const AddTeacher = (props) => {
    const [teacher, setTeacher] = useState({name: '', age: '', skills: []})
    const [error, setError] = useState('')

    const addSkill = name => {
        let skills = teacher.skills
        if(!skills.includes(name)){
            skills.push(name)
        }
        setTeacher({...teacher, skills})
    }

    const addNewTeacher = (e) => {
        e.preventDefault()
        if(!teacher.name.trim() || !teacher.age.trim()) {
            setError("please fill all the fields...")
        } else if(!Number.isInteger(+teacher.age)){
            setError("age must be a number")
        } else if(teacher.skills.length === 0) {
            setError("teacher should have at least one skill")
        } else {
            setError("")
            props.addTeacherMethod(teacher)
            setTeacher({name: "", age: "", skills: []})
        
            e.target.reset() //որպեսզի form -ը վերաթողարկվի

        }

    }

    return <div className="add-teacher">
        <h3>Add Teacher</h3>
        <p className="error">{error}</p>
        <form 
            onSubmit={addNewTeacher}
            className="form">
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    value={teacher.name}
                    onChange={e => setTeacher({...teacher, name: e.target.value})}
                />
            </div>
            <div>
                <label>Age</label>
                <input 
                    type="text" 
                    value={teacher.age}
                    onChange={e => setTeacher({...teacher, age: e.target.value})}
                />
            </div>
            <div>
                <label>Skills</label>
                <select onChange={e => addSkill(e.target.value)}>
                    {
                        props.data.map((elm, index) => {
                            return <option key={index}>{elm}</option>
                        })
                    }
                </select>
                <ul>
                    {
                        teacher.skills.map((elm, index) => {
                            return <li key={index}>{elm}</li>
                        })
                    }
                </ul>
            </div>
            <button>Save</button>
        </form>
    </div>
}
export default AddTeacher