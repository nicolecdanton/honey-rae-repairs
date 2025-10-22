import { getStaffUsers } from "../../services/usersService"
import { useState, useEffect } from "react"
import { User } from "../users/User";
import "./Employees.css"

export const EmployeesList = () => {

    const [employees, setAllEmployees] = useState([])


     useEffect(() => {
            getStaffUsers().then(employeesArray => {
                setAllEmployees(employeesArray) })
        }, [])
    

    return (
        <div className="employees">
            {employees.map(employeeObj => {
                return <User user={employeeObj} key={employeeObj.id}/>
                        })}
        </div>
    )
}