import React from "react";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import TableList from "../../components/Table/TableList";
import { Toaster } from "react-hot-toast";

export default function Tenant() {
  return (
    <div className="p-4 w-100">
      <HeadTitle text="Employee" />
      <TableList />
      <Toaster position="bottom-center" />
    </div>
  );
}
