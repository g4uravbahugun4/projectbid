import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ideaPost,updateideaPost } from "../utils/postActions";
function PersonForm({ showBidForm, setShowBidForm,postId,setBid,ideatrue }) {
  const [data, setData] = useState({
    price: null,
    contact: null,
  
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(ideatrue){
      updateideaPost(postId,data,setBid)
    }else{
      ideaPost(postId,data,setBid);
    }
  };
  return (
    <>
      {showBidForm ? (
        <>
          <form
            onSubmit={handleSubmit}
            className={
              styles.form2 +
              " sm:w-1/2 p-3 h-fit flex flex-col shadow-2xl justify-center  shadow-black rounded-md bg-white  z-50"
            }
          >
            <div className="m-2 flex justify-center">
              {" "}
              <h1 className="font-semibold sm:text-3xl ">
                Enter idea Details:
              </h1>
            </div>{" "}
            <div className="m-2 flex justify-center">
              <label className={styles.label + " m-2"}>Enter Phone No</label>
              <input
                className={
                  styles.input + " text-slate-800 w-11/12 font-bold m-2 p-2"
                }
                type="tel"
                name="contact"
                value={data.contact}
                onChange={handleChange}
              ></input>
            </div>
            <div className="m-2 flex justify-center">
              <label className={styles.label + " m-2"}>Enter idea Amount</label>
              <input
                className={
                  styles.input + " text-slate-800 w-11/12 font-bold m-2 p-2"
                }
                name="price"
                value={data.price}
                onChange={handleChange}
                type="number"
              ></input>
            </div>
            <div className="flex justify-evenly ">
              <button
                className={styles.btn4}
                onClick={() => {
                  setShowBidForm(false);
                }}
              >
                Cancel
              </button>
              <button className={styles.btn5}>Add</button>
            </div>
          </form>
        </>
      ) : null}
    </>
  );
}

export default PersonForm;