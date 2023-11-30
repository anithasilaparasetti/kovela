import React, { useEffect, useState } from "react";
import "./Gridcontainer.css";
import { Link } from "react-router-dom";
import { AdminTemples } from "../../../utils/api";


function Gridcontainer() {
  const [data, setData] = useState([]);

  const AdminProfiles = async () => {

    try {
      let result = await AdminTemples();
      console.log("profiles list", result);

      if (result && result.status === 200) {

        if(result?.data?.data)
        setData(result?.data?.data);
        console.log("list", result);
      } else {
        alert("alert");
      }

    } catch (error) {
      console.log("error", error);
    }
  }

  console.log("temple data", data);

  useEffect(() => {
    AdminProfiles();
  }, []);

  return (
    <div className="grid">
      {data && data.map((item) => {
        return (
          <div styles={{margin: "30px"}}>
            <div >
              <img  alt="Temple " style={{ width: "100px"}} src={item?.logo} />
            </div>
            <div>{item?.name}</div>

          </div>
        )
      })}

      </div>
  );
}

export default Gridcontainer;
