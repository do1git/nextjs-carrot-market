import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey chair</span>
          <span className="font-semibold">$ 19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey chair</span>
          <span className="font-semibold">$ 19</span>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-5 text-center rounded-xl text-2xl w-1/2 mx-auto">
          checkout
        </div>
      </div>

      <div className="rounded-2xl shadow-2xl bg-blue-500 overflow-hidden">
        <div className="h-32">
          <div className="pt-10 px-6 flex justify-between text-3xl text-white">
            <span className="font-semibold">Profile</span>
            <span>CART</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl py-10">
          <div className="flex justify-between px-10 ">
            <div className="flex flex-col items-center">
              <span className="text-slate-400">Orders</span>
              <span className="text-lg font-semibold">340</span>
            </div>
            <div className="bg-slate-700 w-28 h-28 rounded-full relative -top-24" />
            <div className="flex flex-col items-center">
              <span className="text-slate-400">Spent</span>
              <span className="text-lg font-semibold">$340</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-medium text-lg">Tony Molloy</span>
            <span className="text-slate-400">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
