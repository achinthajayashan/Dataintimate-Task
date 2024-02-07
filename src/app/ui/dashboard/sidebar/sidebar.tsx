
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceLaughWink} from "@fortawesome/free-solid-svg-icons";
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import Link from "next/link";
import React from "react";


export function Sidebar() {
    return (
        <section className="flex w-[250px] h-screen bg-gradient-to-b from-[#4e73df] to-[#224abe] justify-center">
            <div className="w-[90%]">
                <div className="mt-6 flex justify-center items-center w-[100%] mb-4">
                    <FontAwesomeIcon icon={faFaceLaughWink} className="w-8 -rotate-12 text-white"/>
                    <h1 className="font-bold text-white ml-4"> SB ADMIN</h1>
                </div>
                <Divider className="opacity-30"/>

                <div>
                    <Link href="/dashboard">
                        <div className="flex text-white pt-5 pb-5 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 text-white mr-3"/>
                            <p className="font-bold">Dashboard</p>
                        </div>
                    </Link>
                    <Divider className="opacity-30"/>

                    <h5 className="font-extrabold text-gray-300 text-xs ml-4 mt-2">INTERFACE</h5>
                    <Link href="/">
                        <div className="flex text-gray-200 hover:text-white pt-5 pb-7 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 mr-3"/>
                            <p className="font-bold">Dashboard</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="flex text-gray-200 hover:text-white pb-5 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12  mr-3"/>
                            <p className="font-bold">Dashboard</p>
                        </div>
                    </Link>

                    <Divider className="opacity-30"/>

                    <h5 className="font-extrabold text-gray-300 text-xs ml-4 mt-2">INTERFACE</h5>
                    <Link href="/">
                        <div className="flex text-gray-200 hover:text-white pt-5 pb-7 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 mr-3"/>
                            <p className="font-bold">Dashboard</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="flex text-gray-200 hover:text-white pb-7 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 mr-3"/>
                            <p className="font-bold">Dashboard</p>

                        </div>
                    </Link>

                    <Link href="/">
                        <div className="flex text-gray-200 hover:text-white pb-5 ml-4">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 mr-3"/>
                            <p className="font-bold">Dashboard</p>
                        </div>
                    </Link>

                    <Divider className="opacity-30"/>


                </div>

                <div className="w-[100%] flex justify-center mt-6">
                    <div className="w-12 h-12 bg-gray-400 rounded-[100%] flex justify-center items-center text-gray-200 hover:bg-gray-300">
                        <FontAwesomeIcon icon={faFaceLaughWink} className="w-4 -rotate-12 "/>
                    </div>
                </div>

            </div>


        </section>
    );
}
