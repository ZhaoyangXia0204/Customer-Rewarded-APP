import {useState, useEffect} from "react";
import EachCustomer from "./calculatePoints";
import "./style.css"
export default function CustomerRewards() {
    const[customerRewardList, setcustomerRewardList] = useState([]);
    const[curCustomer, setCurcustomer] = useState(null)
    useEffect(() => {
        async function fetchCustomers() {
          const data = await fetch(
            "http://localhost:3000/transactions"
          );
          const res = await data.json();
          setcustomerRewardList(res);
        }
    
        fetchCustomers();
      }, []);

      const handleCustomer = (e) => {
        setCurcustomer(e.target.id);
      };
      return(
        <div className="customdiv">
            <div className="namediv">
                {customerRewardList.map((el) => {
                    
                    return(
                        <div key={el.id} id={el.id} onClick={handleCustomer} className="name">
                            {el.name}
                        </div>
                    )
                })}
            </div>
            <div>{curCustomer?<EachCustomer id={curCustomer} data={customerRewardList}/>:null}</div>
        </div>
      )
}