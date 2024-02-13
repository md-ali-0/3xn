import PropTypes from "prop-types";
import SideBarMenuItem from "../../components/SideBarMenuItem";
import SidebarSubMenu from "../../components/SidebarSubMenu";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity  bg-black opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col border dark:border-slate-800 bg-[#0c1427] min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-slate-800 py-3">
                    <h3 className="text-4xl text-gray-400">3<span className="text-primary">xn</span></h3>
                </div>
                <div className="overflow-y-auto custom-scroll">
                    <nav className="mt-5 px-3">
                        <ul>
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Main
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Dashboard",
                                    icon: "LuCommand",
                                    path: "/",
                                }}
                            />
                            <SidebarSubMenu
                                menu={{ name: "Users", icon: "LuUser" }}
                                subMenu={[
                                    { name: "Add User", path: "add-user" },
                                    { name: "All Users", path: "users" },
                                ]}
                            ></SidebarSubMenu>
                            <SidebarSubMenu
                                menu={{
                                    name: "Settings",
                                    icon: "LuSettings",
                                }}
                                subMenu={[
                                    { name: "Alert", path: "button" },
                                    { name: "Dialog", path: "grid" },
                                ]}
                            ></SidebarSubMenu>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Sidebar;
