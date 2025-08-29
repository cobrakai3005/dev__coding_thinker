import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiFolderSimpleFill } from "react-icons/pi";
import { IoIosDocument } from "react-icons/io";
export default function Recursive() {
  let folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "Action",
              folders: [
                {
                  name: "2000s",
                  folders: [
                    { name: "Gladiator.mp4" },
                    { name: "AmericanBeauy.mp4" },
                  ],
                },
                { name: "2010", folders: [] },
              ],
            },
            { name: "Comedy", folders: [{ name: "2000s" }, { name: "2010" }] },
          ],
        },
        {
          name: "Music",
          folders: [{ name: "Rock", folders: [] }, { name: "Rocke.mp4" }],
        },
        { name: "Pictures", folders: [] },
        { name: "Documents", folders: [] },
        {
          name: "hello.txt",
        },
      ],
    },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white">
      <div className="p-8 max-w-sm mx-auto ">
        <ul>
          {folders.map((folder) => (
            <Folder folder={folder} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={folder.name} className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaChevronRight
              className={`${isOpen ? "rotate-90" : " "} size-4`}
            />
          </button>
        )}

        {folder?.folders ? (
          <PiFolderSimpleFill className="size-6 text-sky-500" />
        ) : (
          <IoIosDocument className="size-6 text-grayy-700" />
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} />
          ))}
        </ul>
      )}
    </li>
  );
}
