const Widgets = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <h4 className="text-gray-900 dark:text-gray-200 text-lg font-medium">
                    Widgets
                </h4>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
                        <div className="card">
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow-1">
                                        <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                                            Today Revenue
                                        </span>
                                        <h3 className="text-2xl mt-2 dark:text-gray-300">
                                            $851
                                        </h3>
                                    </div>
                                    <div className="align-self-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className=" w-10 h-10 fill-primary/20 stroke-primary "
                                        >
                                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                            <path d="M3 6h18" />
                                            <path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow-1">
                                        <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                                            Product Sold
                                        </span>
                                        <h3 className="text-2xl mt-2 dark:text-gray-300">
                                            2541
                                        </h3>
                                    </div>
                                    <div className="align-self-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className=" w-10 h-10 text-amber-500 "
                                        >
                                            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                                            <line x1={6} x2={6} y1={2} y2={4} />
                                            <line
                                                x1={10}
                                                x2={10}
                                                y1={2}
                                                y2={4}
                                            />
                                            <line
                                                x1={14}
                                                x2={14}
                                                y1={2}
                                                y2={4}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow-1">
                                        <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                                            New Customers
                                        </span>
                                        <h3 className="text-2xl mt-2 dark:text-gray-300">
                                            654
                                        </h3>
                                    </div>
                                    <div className="align-self-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className=" w-10 h-10 fill-success/20 text-green-500 "
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow-1">
                                        <span className="text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                                            New Visitors
                                        </span>
                                        <h3 className="text-2xl mt-2 dark:text-gray-300">
                                            854
                                        </h3>
                                    </div>
                                    <div className="align-self-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className=" w-10 h-10 fill-info/20 stroke-info "
                                        >
                                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line
                                                x1={16}
                                                x2={8}
                                                y1={13}
                                                y2={13}
                                            />
                                            <line
                                                x1={16}
                                                x2={8}
                                                y1={17}
                                                y2={17}
                                            />
                                            <line
                                                x1={10}
                                                x2={8}
                                                y1={9}
                                                y2={9}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widgets;
