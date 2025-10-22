
import { CustomerList } from "./components/customers/CustomersList";
import { TicketList } from "./components/tickets/TicketList";
import { EmployeesList } from "./components/employees/EmployeesList";

export const App = () => {
  console.log("✅ App rendered");
  return (<>
    {/* <TicketList /> */}
    {/* <CustomerList /> */}
    < EmployeesList />
    </>
  )
}