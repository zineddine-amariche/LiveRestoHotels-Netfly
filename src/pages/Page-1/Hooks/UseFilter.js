import React, { useState } from "react";

export default function UseFilter(initialFValues) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("all");

  const handelCategory = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = async (data) => {
    // console.log(data);
  };

  return {
    values,
    errors,
    onSubmit,
    handelCategory,
    category
  };
}
