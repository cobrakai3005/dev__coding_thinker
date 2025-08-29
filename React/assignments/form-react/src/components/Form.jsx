import React, { useActionState, useRef, useState } from "react";
import {
  InputField,
  MaritalStatus,
  ProfilePicture,
  SelectDepartment,
  TextareaField,
} from "./InputField";

export default function Form({ addEmployee }) {
  const [image, setImage] = useState(
    "" ||
      "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
  );

  const imageRef = useRef(null);

  const [state, formAction, isPending] = useActionState(
    (prevState, formData) => {
      const userOb = {
        id: Date.now(),
        name: formData.get("name"),
        profile: image,
        age: formData.get("age"),
        address: formData.get("address"),
        salary: formData.get("salary"),
        department: formData.get("department"),
        maritalStatus: formData.get("status"),
      };

      addEmployee((prev) => [...prev, userOb]);
      setImage(
        "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
      );
    },
    {
      error: null,
    }
  );
  return (
    <form
      action={formAction}
      className="flex flex-col  p-4 items-center  justify-center h-full border-r-1 border-zinc-700/50"
    >
      <h1 className="text-3xl my-4 font-bold text-center">
        Add Employee Details
      </h1>
      <button
        type="button"
        onClick={() => imageRef.current?.click()}
        className="flex justify-center w-full"
      >
        <img
          src={image}
          alt="profile picture"
          className="w-24 h-24 rounded-full"
        />
      </button>
      {!image && "Add Proile Picture"}
      <ProfilePicture ref={imageRef} image={image} setImage={setImage} />
      <InputField
        type={"text"}
        placeholder={"Enter name"}
        id={"name"}
        label={"Name: "}
      />

      <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type={"number"}
          placeholder={"Enter Age"}
          id={"age"}
          name={"age"}
          label={"Age: "}
        />

        <SelectDepartment />
      </div>
      <TextareaField
        placeholder={"Enter Address"}
        label={"Add Address: "}
        id={"address"}
      />

      <InputField
        type={"number"}
        placeholder={"Enter salary"}
        id={"salary"}
        label={"salary: "}
      />

      <MaritalStatus />

      <button
        type="submit"
        className="w-full px-5 py-2 bg-gradient-to-l from-violet-700 to-cyan-500 rounded-4xl font-semibold cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
