'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartArea,
    faChevronLeft,
    faFaceLaughWink,
    faFolder,
    faGaugeHigh,
    faGear, faTable,
    faWrench
} from "@fortawesome/free-solid-svg-icons";
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import Link from "next/link";
import React, {useState} from "react";


export function Sidebar({updateCompName, compactWindow}: any) {
    const [isCompact, setCompact] = useState(false);
    const compactSideBar = () => {
        compactWindow();
        setCompact(!isCompact);
    };

    return (
        <section className={`flex ${isCompact ? 'xl:w-60' : 'sm:w-20'} h-full bg-gradient-to-b from-[#4e73df] to-[#224abe] justify-center`}>
            <div className="w-[90%]">
                <div className="mt-6 flex justify-center items-center w-[100%] mb-4 flex-wrap">
                    <FontAwesomeIcon icon={faFaceLaughWink} className="-rotate-12 text-white size-8"/>
                    <h1 className={`${isCompact ? 'visible': 'hidden' } font-bold text-white ml-4`}> SB ADMIN</h1>
                </div>
                <Divider className="opacity-30"/>

                <div>
                    <Link href="/dashboard">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1' } font-bold flex text-white pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faGaugeHigh} className="size-3"/>
                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Dashboard</p>
                        </div>
                    </Link>
                    <Divider className="opacity-30"/>

                    <h5 className={`${isCompact ? 'ml-4': 'text-[10px] mt-2 ml-2' } font-extrabold text-gray-300 text-xs mt-2`}>INTERFACE</h5>
                    <Link href="/">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1' } font-bold flex text-gray-200 pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faGear} className="size-3 mr-3"/>
                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Components</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1 flex-col' } font-bold flex text-gray-200 pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faWrench} className="size-3 mr-3"/>
                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Utilities</p>
                        </div>
                    </Link>

                    <Divider className="opacity-30"/>

                    <h5 className={`${isCompact ? 'ml-4': 'text-[10px] mt-2 ml-3' } font-extrabold text-gray-300 text-xs mt-2`}>ADDONS</h5>
                    <Link href="/">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1 flex-col' } font-bold flex text-gray-200 pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faFolder} className="size-3 mr-3"/>
                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Pages</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1 flex-col' } font-bold flex text-gray-200 pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faChartArea} className="size-3 mr-3"/>
                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Charts</p>

                        </div>
                    </Link>

                    <Link href="/">
                        <div className={`${isCompact ? 'justify-normal ml-4': 'justify-center ml-1 flex-col' } font-bold flex text-gray-200 pt-5 pb-5  flex-wrap items-center`}>
                            <FontAwesomeIcon icon={faTable} className="size-3 mr-3"/>

                            <p className={`${isCompact ? 'ml-3': 'text-[12px] mt-2' } font-bold `}>Tables</p>

                        </div>
                    </Link>

                    <Divider className="opacity-30"/>


                </div>

                <div className="w-[100%] flex justify-center mt-6" id="buttonsplit">
                    <div    onClick={compactSideBar}
                        className="w-10 h-10 bg-gray-400 rounded-[100%] flex justify-center items-center text-gray-200 hover:bg-gray-300">
                        <FontAwesomeIcon icon={faChevronLeft} className="size-3"/>
                    </div>
                </div>

            </div>


        </section>
    );
}
