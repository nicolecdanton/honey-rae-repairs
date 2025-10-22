import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/usersService"
import { User } from "../users/User";
import "./Customers.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customersArray => {
            console.log("Fetched customers:", customersArray)
            setCustomers(customersArray) })
    }, [])


    return (
        <div className="customers">
            {customers.map(customerObj => {
                return <User user={customerObj} key={customerObj.id}/>
            })}

        </div>
    )
}