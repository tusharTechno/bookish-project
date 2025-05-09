import { BookTable } from "@/components/BookTable";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full px-5 py-10">
      <h1 className="text-4xl font-bold mb-2">Book Collection</h1>
      <p className="text-xl text-zinc-300">
        Browse your personal library of books
      </p>
      <BookTable />
    </div>
  );
};

export default HomePage;
