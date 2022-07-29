import {useState} from 'react'

const Filter = ({skills, fn}) => {

    const [list, setList] = useState(skills.map(elm => {
        return {title: elm, active: false}
    }))

    const doUpdate = (e, index) => {
        list[index].active = e.target.checked
        setList([...list])
        fn(list)
    }

    return <div>
        <p>Let's search teachers for you...</p>
        <div className="checkbox-list">
            {
                list.map((elm, i) => {
                    return (
                        <div key={i}>
                            <input 
                                type="checkbox"
                                onChange={(e) => doUpdate(e, i)}
                            />
                            {elm.title}
                        </div>
                    )
                })
            }
        </div>
    </div>
}
export default Filter