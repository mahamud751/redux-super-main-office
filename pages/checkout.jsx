import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/booking", data).then((res) => {
      if (res.data.insertedId) {
        setSuccess(true);
        reset();
      }
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("phone")} />
        <input type="submit" />
      </form>
      {success && <Alert severity="success">Booking successfully!</Alert>}
    </Box>
  );
}
