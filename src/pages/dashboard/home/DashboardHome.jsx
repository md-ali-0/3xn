import { HiOutlineChartPie, HiOutlineClock, HiOutlineEye, HiOutlineUser } from "react-icons/hi";

const DashboardHome = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <div className="flex justify-between items-center rounded bg-white dark:bg-[#0c1427] border dark:border-slate-800 py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded bg-indigo-100/10 py-3.5 px-3">
                        <HiOutlineEye className="text-indigo-500" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-gray-300">
                            3.456K
                        </h4>
                        <span className="text-md text-slate-400 font-light">
                            Total views
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded bg-white dark:bg-[#0c1427] border dark:border-slate-800 py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded bg-green-100/10 py-3.5 px-3">
                        <HiOutlineClock className="text-green-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-gray-300">
                            5461
                        </h4>
                        <span className="text-md text-slate-400 font-light">
                            Total Products
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded bg-white dark:bg-[#0c1427] border dark:border-slate-800 py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded bg-blue-100/10 py-3.5 px-3">
                        <HiOutlineChartPie className="text-primary" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-gray-300">
                            $3.456K
                        </h4>
                        <span className="text-md text-slate-400 font-light">
                            Total Sales
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded bg-white dark:bg-[#0c1427] border dark:border-slate-800 py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded bg-amber-100/10 py-3.5 px-3">
                        <HiOutlineUser className="text-amber-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-gray-300">
                            1456K
                        </h4>
                        <span className="text-md text-slate-400 font-light">
                            Total Users
                        </span>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
};

export default DashboardHome;
