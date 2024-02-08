'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faClipboardList, faComments, faDollarSign, faDownload} from "@fortawesome/free-solid-svg-icons";
import LineChart from "@/app/ui/dashboard/charts/line/LineChart";
import DonutChart from "@/app/ui/dashboard/charts/donut/DonutChart";



function Page() {
    return (
        <div className="w-full min-h-full pt-6 px-8 overflow-x-hidden bg-gray-100 flex flex-col gap-y-8">

            <div className="w-full flex justify-between">
                <h2 className={'text-3xl font-light'}>Dashboard</h2>
                <button className={'px-2 bg-[#4e73df] text-gray-100 flex items-center rounded-md'}>
                    <FontAwesomeIcon icon={faDownload} className="w-4 text-gray-300 mr-3"/>
                    Generate Report
                </button>
            </div>

            <div className="flex justify-between w-full h-max flex-wrap gap-y-4">
                <div className="lg:w-[24%] md:w-[45%] w-11/12 h-24 drop-shadow-lg bg-white rounded-md border-l-4 border-blue-600 p-4 flex items-center justify-between">

                    <div>
                        <span className={'text-xs text-[#4e73df] font-bold'}>EARNINGS (MONTHLY)</span>
                        <h2>$40,000</h2>
                    </div>

                    <FontAwesomeIcon icon={faCalendar} className="w-6 text-gray-300"/>



                </div>
                <div className={'lg:w-[24%] md:w-[45%] w-11/12 h-24 drop-shadow-lg bg-white ' +
                    'rounded-md border-l-4 border-green-400 p-4 flex items-center justify-between'}>

                    <div>
                        <span className={'text-xs text-green-400 font-bold'}>EARNINGS (ANNUAL)</span>
                        <h2>$215,000</h2>
                    </div>
                    <FontAwesomeIcon icon={faDollarSign} className="w-6 text-gray-300"/>

                </div>
                <div className="lg:w-[24%] md:w-[45%] w-11/12 h-24 drop-shadow-lg bg-white rounded-md border-l-4 border-cyan-500 p-4 flex items-center justify-between">

                    <div className="w-full">
                        <span className="text-xs text-cyan-500 font-bold">TASKS</span>
                        <div className="flex items-center gap-x-4 pr-4">
                            <h2>50%</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-cyan-500 h-2 rounded-full w-[50%]"></div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faClipboardList} className="w-6 text-gray-300"/>
                </div>
                <div className="lg:w-[24%] md:w-[45%] w-11/12 h-24 drop-shadow-lg bg-white rounded-md border-l-4 border-yellow-500 p-4 flex items-center justify-between">

                    <div>
                        <span className="text-xs text-yellow-500 font-bold">PENDING REQUESTS</span>
                        <h2>18</h2>
                    </div>
                    <FontAwesomeIcon icon={faComments} className="w-6 text-gray-300"/>
                </div>
            </div>

            <div className="w-full flex flex-wrap gap-5">
                <div className="lg:w-[64%] w-full min-h-28 bg-white drop-shadow-md rounded-md">
                    <div
                        className="py-2 px-4 font-bold text-blue-500 bg-[#f8f9fc] border-b-2 flex justify-between items-center">
                        <span>Earnings Overview</span>

                    </div>
                    <LineChart/>

                </div>
                <div className="lg:w-[33%] w-full min-h-28 bg-white drop-shadow-md rounded-md">
                    <div
                        className="py-2 px-4 font-bold text-blue-500 bg-[#f8f9fc] border-b-2 flex justify-between items-center">
                        <span>Revenue Sources</span>

                    </div>
                    <div className="lg:block flex justify-center">
                    <DonutChart/>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-wrap">

                <div className="lg:w-1/2 w-full flex flex-col gap-y-4">

                    <div className="lg:w-[97%] w-full min-h-60 bg-white drop-shadow-lg rounded-md">
                        <div
                            className="py-2 px-4 font-bold text-blue-500 bg-[#f8f9fc] border-b-2 flex justify-between items-center">
                            <span>Projects</span>
                        </div>

                        <div className="p-4 w-full">

                            <div className="my-8">
                                <div className="flex justify-between text-xs font-semibold text-gray-600">
                                    <span>Server Migration</span>
                                    <span>20%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-red-600 h-4 rounded-full w-[20%]"></div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className={'flex justify-between text-xs font-semibold text-gray-600'}>
                                    <span>Sales Tracking</span>
                                    <span>40%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-yellow-400 h-4 rounded-full w-[40%]"></div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className="flex justify-between text-xs font-semibold text-gray-600">
                                    <span>Customer Database</span>
                                    <span>40%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-blue-600 h-4 rounded-full w-[60%]"></div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className="flex justify-between text-xs font-semibold text-gray-600">
                                    <span>Payout Details</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-cyan-500 h-4 rounded-full w-[80%]"></div>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className="flex justify-between text-xs font-semibold text-gray-600">
                                    <span>Account Setup</span>
                                    <span>complete</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-green-500 h-4 rounded-full w-[100%]"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="lg:w-[97%] w-full min-h-60 flex flex-wrap gap-y-8 justify-between">
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#4e73df] text-white rounded-md">
                            <h3 className=" ">Primary</h3>
                            <span className="text-xs opacity-50">#4e73df</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#1cc88a] text-white rounded-md">
                            <h3 className="">Success</h3>
                            <span className="text-xs opacity-50">#1cc88a</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#36b9cc] text-white rounded-md">
                            <h3 className="">Info</h3>
                            <span className="text-xs opacity-50">#36b9cc</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#f6c23e] text-white rounded-md">
                            <h3 className="">Warning</h3>
                            <span className="text-xs opacity-50">#f6c23e</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#e74a3b] text-white rounded-md">
                            <h3 className="">Danger</h3>
                            <span className="text-xs opacity-50">#e74a3b</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#858796] text-white rounded-md">
                            <h3 className="">Secondary</h3>
                            <span className="text-xs opacity-50">#858796</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#f8f9fc] text-gray-800 rounded-md">
                            <h3 className="">Light</h3>
                            <span className="text-xs opacity-50">#f8f9fc</span>
                        </div>
                        <div
                            className="lg:w-[48%] w-full h-max drop-shadow-lg pl-4 py-4 bg-[#5a5c69] text-white rounded-md">
                            <h3 className="">Dark</h3>
                            <span className="text-xs opacity-50">#5a5c69</span>
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 w-full items-end flex flex-col gap-y-4 font-light">

                    <div className="lg:w-[97%] w-full min-h-72 bg-white drop-shadow-lg rounded-md">
                        <div
                            className="py-2 px-4 font-bold text-blue-500 bg-[#f8f9fc] border-b-2 flex justify-between items-center">
                            <span>Illustrations</span>
                        </div>
                        <div className="flex flex-col gap-y-5 w-full p-4">
                            <div className="w-full flex justify-center">
                            </div>
                            <p>Add some quality, svg illustrations to your project courtesy of unDraw,
                                a constantly updated collection of beautiful svg images that you can use completely
                                free and without attribution!</p>

                            <a href="" className="text-blue-700 hover:underline">
                                Browse Illustrations on unDraw →
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-[97%] w-full min-h-48 bg-white drop-shadow-lg rounded-md">
                        <div
                            className="py-2 px-4 font-bold text-blue-500 bg-[#f8f9fc] border-b-2 flex justify-between items-center">
                            <span>Development Approach</span>
                        </div>

                        <div className="flex flex-col gap-y-5 w-full p-4">
                            <p>
                                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS
                                bloat and poor page performance. Custom CSS classes are used to create custom components
                                and custom utility classes.

                            </p>
                            <p>
                                Before working with this theme, you should become familiar with the Bootstrap framework,
                                especially the utility classes.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="px-4 py-4"></div>

        </div>
    );
}

export default Page;


