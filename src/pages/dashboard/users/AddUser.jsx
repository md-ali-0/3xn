import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import useAxios from "../../../hooks/useAxios";

const AddUser = () => {
    const axios = useAxios();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const loadingToast = toast.loading("User Creating ... ");
        
        try {
            const res = await axios.post("/add-user", { ...data, status: true });
            console.log(res.data);
            toast.dismiss(loadingToast);
            toast.success("Successfully created!");
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex items-center py-1.5">
                <h3 className="font-Quicksand text-primary text-xl font-bold">
                    Add a User
                </h3>
            </div>
            <div className="bg-white dark:bg-[#0c1427] border border-gray-800  rounded py-2 px-3 md:w-1/2 mx-auto">
                <form
                    className="container flex flex-col mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="col-span-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", {
                                required: "Name is required.",
                            })}
                            placeholder="Enter Full Name"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.name && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.name?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            User Name
                        </label>
                        <input
                            id="username"
                            type="text"
                            {...register("username", {
                                required: "Username is required.",
                            })}
                            placeholder="User Name"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.username && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.username?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            {...register("email", {
                                required: "Email is required.",
                            })}
                            placeholder="Enter Email Address"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.email && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Packages
                        </label>
                        <select
                            {...register("plan", {
                                required: "Select a Package",
                            })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        >
                            <option value="">Select Packages</option>
                            <option value="0.25 Day">6 Hours</option>
                            <option value="7 Days">7 Days</option>
                            <option value="15 Days">15 Days</option>
                            <option value="30 Days">30 Days</option>
                        </select>
                        {errors.plan && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.plan?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required.",
                            })}
                            placeholder="Enter Password"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.password && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.password?.message}
                            </span>
                        )}
                    </div>
                    <div className="text-center py-2">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
