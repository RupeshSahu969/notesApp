import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import LoadingToRdirect from "./LoadingToRdirect";
const ProtectedRoute = ({ children }) => {
  
const currentUser = useSelector((state) => state.user);
 

  if (!currentUser) {
    return <LoadingToRdirect/>  ;
  }
  return children;
};

export default ProtectedRoute;
