"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="h-dvh">
      <h1 className="text-center text-4xl pt-20">Not Found</h1>
      <h2 className="text-center">Redirecting to Main Page in 5 seconds...</h2>
    </div>
  );
};

export default NotFoundPage;
