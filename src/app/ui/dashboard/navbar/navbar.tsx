import {faBell, faEnvelope, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "@nextui-org/badge";
import {Avatar, Divider} from "@nextui-org/react";

export function Navbar() {
    return (
        <section className="w-auto h-[70px] shadow flex justify-between ">
            <div className="flex justify-items-center items-center ml-4">
                <input className="w-60 h-[40px] bg-gray-100 rounded pl-2" placeholder="Search for ..."/>
                <div className=" w-10 h-[40px] bg-[#4e73df] rounded-e flex items-center justify-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 text-white"/>
                </div>
            </div>

            <div className="flex mr-4 justify-center items-center">
                <FontAwesomeIcon icon={faBell} className="w-4 text-gray-300 mr-5"/>
                {/*<Badge color="danger" content={5} shape="circle" className="rounded-[100%] bg-red-500">*/}
                {/*    <FontAwesomeIcon icon={faBell} className="w-4 inline"/>*/}
                {/*</Badge>*/}
                <FontAwesomeIcon icon={faEnvelope} className="w-4 text-gray-300"/>
                <Divider orientation="vertical" className="h-full w-2"/>
                <h5 className="text-gray-400 text-xs ml-5 mr-3">Douglos McGee</h5>
                <div className="w-8 h-8 bg-gray-300 rounded-[100%]"></div>
            </div>

        </section>
    );
}



