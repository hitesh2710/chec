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
          className="flex-col flex-wrap justify-center items-center w-[79vw] h-[90vh] text-center absolute top-[10vh] left-[21vw]
             bg-white-300 border-2 border-gray-400   text-[4vh] text-[#0052A2]"
        >
          <a href="#formData">
            <button
              className="w-[13vw] bg-gray-300 border-2 p-1 m-1 rounded-lg absolute right-0 top-[0vh]
            hover:bg-gray-400 cursor-pointer transition duration-200"
              onClick={() => setopen(true)}
            >
              Create Contact
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
          className=" w-[79vw] h-[90vh] text-center absolute top-[10vh] left-[21vw]
            bg-white-300 border-2 border-gray-400 text-[4vh] text-[#0052A2]"
        >
          Create Contact
          <div className="absolute top-[15vh] left-[19vw] w-[40vw] h-[60vh] bg-gray-200 border-2 p-3 m-2 rounded-lg ">
            <form>
              <label>First Name</label>
              <input
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
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
