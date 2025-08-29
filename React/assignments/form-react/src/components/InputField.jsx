import React, { useState } from "react";

export function InputField({ type, label, placeholder, value, onChange, id }) {
  return (
    <div className="flex w-full p-2 flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="rounded w-full outline-0 border-[1px] border-zinc-200/50 py-3 px-3"
        required
      />
    </div>
  );
}
export function TextareaField({ type, label, placeholder, id }) {
  return (
    <div className="flex w-full p-2 flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={id}
        id={id}
        className="rounded-xl outline-0 border-[1px] border-zinc-200/50 py-3 px-3"
        placeholder=" Enter Address"
        required
      ></textarea>
    </div>
  );
}

export function SelectDepartment() {
  return (
    <div className="flex w-full p-2 flex-col gap-2  ">
      <label htmlFor={"department"}>Select Department</label>
      <select
        name={"department"}
        id={"department"}
        className="rounded-xl outline-0 border-[1px] text-zinc-200 font-semibold bg-cyan-500/80 border-zinc-200/50 py-3 px-3"
        required
        // placeholder=" Enter Address"
      >
        <option value="">Choose</option>
        <option value="it">IT</option>
        <option value="hr">HR</option>
        <option value="logistics">logistics</option>
        <option value="trainer">trainer</option>
      </select>
    </div>
  );
}

export function MaritalStatus({
  type,
  label,
  placeholder,

  id,
}) {
  return (
    <div className="flex w-full p-2  gap-5">
      <label htmlFor={"status"}>Marital Status: </label>

      <input type="radio" name="status" id="married" value={"married"} />
      <label htmlFor="married">Married</label>
      <input type="radio" name="status" id="unmarried" value={"unmarried"} />
      <label htmlFor="unmarried">UnMarried</label>
    </div>
  );
}

export function ProfilePicture({ ref = { ref }, image, setImage }) {
  return (
    <div>
      <input
        ref={ref}
        className="hidden"
        onChange={(e) => {
          const p = e.target.files[0];
          setImage(URL.createObjectURL(p));
        }}
        type="file"
        name="profile"
        id="profile"
      />
    </div>
  );
}
