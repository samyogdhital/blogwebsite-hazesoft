import React from "react";
import { useParams } from "react-router-dom";

const profile = () => {
  let { id } = useParams();
  return (
    <div>
      This is a the profile of <h1> {id}</h1>.
    </div>
  );
};

export default profile;
