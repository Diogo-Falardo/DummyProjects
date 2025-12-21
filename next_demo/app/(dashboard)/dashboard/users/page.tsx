import Link from "next/link";
import React from "react";

const users = () => {
  return (
    <div>
      page
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/users/1">U1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">U2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">U3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">U4</Link>
        </li>
      </ul>
    </div>
  );
};

export default users;
