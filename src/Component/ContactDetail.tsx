import React, { useState } from "react";
import { contactinterface } from "./contactinterface";
// import EditContact from "./EditContact";
import { Link } from "react-router-dom";
import { delete_contact, update_contact } from "../Action/contact_action";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ContactDetailInterface {
  datat: contactinterface[];
}

function ContactDetail({ datat }: ContactDetailInterface) {
  const [edit, setEdit] = useState(false);
  const [contact_up,setContact_up]=useState<contactinterface>()
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [status, setstatus] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const navigate=useNavigate()
  const setUpdate=(data:contactinterface)=>{
    setEdit(true)
    setContact_up(data)
  }
  useEffect(()=>{
    if(contact_up!=null){
        setFirst_name(contact_up.first_name)
        setLast_name(contact_up.last_name)
        setstatus(contact_up.status)
      }
  },[contact_up])

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if(contact_up!=null)
    {
    const id = contact_up.id;
    const data_to_send = { first_name, last_name, status, id };
    dispatch(update_contact(data_to_send));
    setEdit(false)
    // navigate('/contact')
    }

    // console.log(data_to_send);
  };
  const deleteContact=(data:contactinterface)=>{
    dispatch(delete_contact(data))
  }
  return (
    <>
      {edit && contact_up ? (
       <div className="flex flex-col items-center">
       Update Contact
       <div className="md:absolute md:top-[15vh] md:left-[19vw] md:w-[40vw] md:h-[60vh] absolute top-[15vh] w-[70vw] bg-gray-200 md:border-2 md:p-3 md:m-2 rounded-lg flex flex-col items-center ">
         <form>
           <label>First Name</label>
           <input
             required
             className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
             type="text"
             value={first_name}
             name="first_name"
             onChange={(e) => setFirst_name(e.target.value)}
           ></input>
           <label>Last Name</label>
           <input
             required
             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
             type="text"
             value={last_name}
             name="last_name"
             onChange={(e) => setLast_name(e.target.value)}
           ></input>
           <label>Status</label>
           <div className="mt-1 block w-full border border-gray-300 rounded-md p-2">
             <label>Active</label>
             <input
               className="ml-5"
               type="radio"
               name="status"
               value="Active"
               checked={status === 'Active'}
               onChange={(e) => setstatus(e.target.value)}
             ></input>
             <label className="ml-5">InActive</label>
             <input
               className="ml-5"
               type="radio"
               name="status"
               value="InActive"
               checked={status === 'InActive'}
               defaultChecked
               onChange={(e) => setstatus(e.target.value)}
             ></input>
             <br />
           </div>
 
           <button
             className="mt-1 mb-2 block w-full border border-gray-300 rounded-md p-2 bg-gray-300
             hover:bg-gray-400 cursor-pointer transition duration-200"
             onClick={submitForm}
           >
             Update
           </button>
         </form>
       </div>
       {/* <div>Contact Found</div> */}
     </div>
      ) : 
      <div className="h-full w-full flex flex-col flex-wrap items-center justify-center">
      {datat.length>0 &&
        datat.map((data)=> (
           
            <div className="w-[18vw] max-md:w-[60vw] bg-gray-300 border-2 p-1 m-1 rounded-lg text-base text-[#0052A2] ">
              FirstName : {data.first_name}
              <br />
              Last Name : {data.last_name}
              <br />
              Status : {data.status}
              <br />
              <button
                className="w-[5vw] max-md:w-[10vw] h-[5.5vh] bg-green-300 border-2 p-1 m-1 rounded-lg 
                hover:bg-green-400 cursor-pointer transition duration-200"
                onClick={() => setUpdate(data)}
              >
                Edit
              </button>
              <button
                className="w-[5vw] max-md:w-[10vw] h-[5.5vh] bg-red-300 border-2 p-1 m-1 rounded-lg 
                hover:bg-red-400 cursor-pointer transition duration-200"
                onClick={()=>deleteContact(data)}
              >
                Delete
              </button>
              
            </div>
            
          ))
       }
      </div>
   }
   </>
  );

}
export default ContactDetail;
