"use client";

import {useParams} from "next/navigation";

export default function DetailPage() {
  const {id} = useParams();

  return (
    <div>
      <h1 className="text-3xl">Detail Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}
