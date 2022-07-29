import Filter from './Filter'
import Teacher from './Teacher'

const Dashboard = ({teachers, skills, fn}) => {
    return <div className="dashboard">
        <h3>Dashboard</h3>
        <Filter 
            skills={skills} 
            fn={fn}
        />
        <div className="teachers">
            {
                teachers.map((teach, i) => {
                    return <Teacher 
                                {...teach}
                                key={i}
                            />
                })
            }
        </div>
    </div>
}
export default Dashboard