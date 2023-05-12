import React from "react";

const ContactPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50px",
          marginTop: "-773px",
          backgroundColor: "teal",
        }}
      >
        <h2 style={{ color: "white" }}>Contact Page</h2>
      </div>

      {/* form data */}

      <button
        style={{
          width: "15%",
          height: "50px",
          marginTop: "60px",
          marginLeft: "45px",
          backgroundColor: "brown",
          color: "white",
          fontSize: "20px",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Contact
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <br />
                {/*body*/}
                <div
                  style={{
                    border: "1px solid red",
                    width: "500px",
                    height: "200px",
                    margin: "auto",
                    padding:"20px"
                  }}
                >
                  <label> First Name:</label>
                  <input type="text" placeholder="Enter First Name" />
                  <br />
                  <br />
                  <label> Last Name:</label>
                  <input type="text" placeholder="Enter Last Name" />
                  <br />
                  <br />
                  <label style={{"marginRight":"10px"}}>Status</label>
                  <input type="radio"  placeholder="Active" />
                  <label>Active</label>
                  <br />
                  <br />
                  <input type="radio" placeholder="Inactive" />
                  <label>Inactive</label>
                  <br />
                  <br />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    style={{
                        width: "15%",
                        height: "30px",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "15px",
                        borderRadius: "15px",
                        cursor: "pointer"
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{
                        width: "15%",
                        height: "30px",
                        backgroundColor: "green",
                        color: "white",
                        fontSize: "15px",
                        borderRadius: "15px",
                        cursor: "pointer",
                      }}
                  >
                    Submit
                  </button>
                </div>
                </div>
                {/*footer*/}
                <br />
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ContactPage;
