
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceLaughWink} from "@fortawesome/free-solid-svg-icons";
import {Divider} from "@nextui-org/react";
import Link from "next/link";


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
                    <Link href="/">
                        <div className="flex">
                            <FontAwesomeIcon icon={faFaceLaughWink} className="w-3 -rotate-12 text-white"/>
                            <p>Dashboard</p>
                        </div>
                    </Link>

                </div>

            </div>


        </section>
    );
}
