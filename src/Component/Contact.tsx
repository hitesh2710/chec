import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_contact } from "../Action/contact_action";
import { AppDispatch, RootState } from "../store";
import ContactDetail from "./ContactDetail";
import { contactinterface } from "./contactinterface";
function Contact() {
  const [open, setopen] = useState(false);
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [status, setstatus] = useState<string>("InActive");
  const [fetch_data, setfetch_data] = useState<any>([]);
  const cc = useSelector((state: RootState) => state.contact_reducer.data);
  console.log("cc:",typeof(cc))
  const dispatch: AppDispatch = useDispatch();

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const id = Date.now();
    const data_to_send = { first_name, last_name, status, id };
    dispatch(create_contact(data_to_send));

    const str = JSON.stringify(data_to_send);
    // console.log(data_to_send);
    setopen(false);
  };
  useEffect(() => {
    setfetch_data(cc);
  }, [cc]);

  return (
    <>
      {open == false ? (
        <div
          className="md:flex md:flex-col md:flex-wrap md:justify-center md:w-[79vw] md:h-[90vh] md:text-center md:absolute md:top-[10vh] md:left-[21vw]  
          bg-white-300 md:border-2 md:border-gray-400 md:p-[2vh]  md:text-[4vh] p-[6vh] w-[98vw] max-md:absolute max-md:top-[60vh] max-md:text-[5vh] text-center h-auto  text-[#0052A2]"
        >
          <a href="#formData">
            <button
              className="w-[13vw] bg-gray-300 border-2 p-1 m-1 rounded-lg absolute right-0 top-[0vh]
            hover:bg-gray-400 cursor-pointer transition duration-200"
              onClick={() => setopen(true)}
            >
              Create
            </button>
          </a>
          {fetch_data.length > 0 ? (
            // <></>
          <ContactDetail datat={fetch_data} />
          
          ) : (
            <div>No Contacts Found</div>
          )}
          {/* <div className="flex flex-col flex-wrap w-full h-full">
          {fetch_data.length > 0 ? (
            
            fetch_data.map((obj: contactinterface) => (
              <ContactDetail data={obj} />
            ))
          ) : (
            <div>No Contacts Found</div>
          )}
          </div> */}

        </div>
      ) : (
        <div
          id="formData"
          
          className=" md:w-[79vw] md:h-[90vh] md:text-center md:absolute md:top-[10vh] md:left-[21vw]
          bg-white-300 md:border-2 md:border-gray-400 md:p-[40vh]  md:text-[4vh] p-[6vh] w-[98vw] absolute top-[60vh] text-[5vh] text-center h-auto  text-[#0052A2] flex flex-col items-center"
        >
          <div>Create Contact</div>
          
          <div className="md:absolute md:top-[15vh] md:left-[19vw] md:w-[40vw] md:h-[60vh] absolute top-[15vh] w-[70vw] flex flex-col items-center bg-gray-200 md:border-2 md:p-3 md:m-2 rounded-lg ">
            <form>
              <label>First Name</label>
              <input
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
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
                  onChange={(e) => setstatus(e.target.value)}
                ></input>
                <label className="ml-5">InActive</label>
                <input
                  className="ml-5"
                  type="radio"
                  name="status"
                  value="InActive"
                  defaultChecked
                  onChange={(e) => setstatus(e.target.value)}
                ></input>
                <br />
              </div>

              <button
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-300
                hover:bg-gray-400 cursor-pointer transition duration-200"
                onClick={submitForm}
              >
                Submit
              </button>
            </form>
          </div>
          {/* <div>Contact Found</div> */}
        </div>
      )}
    </>
  );
}

export default Contact;
