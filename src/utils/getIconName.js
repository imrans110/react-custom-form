import React from "react";
import { FiUser, FiHash, FiAtSign, FiLock } from "react-icons/fi";

export const getIconName = type => {
  switch (type) {
    case "number":
      return <FiHash />;

    case "password":
      return <FiLock />;

    case "email":
      return <FiAtSign />;

    case "username":
      return <FiUser />;

    case "radio":
      return null;

    default:
      return <FiUser />;
  }
};
