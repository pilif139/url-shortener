import {RiseLoader} from "react-spinners";

export default function Loading(){
    return (
        <div className="flex flex-col items-center justify-center text-2xl">
            <RiseLoader loading={true} size={20} className="mt-20"/>
        </div>
    )
}