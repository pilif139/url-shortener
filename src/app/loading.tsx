import {RiseLoader} from "react-spinners";

export default function Loading(){
    return (
        <div className="text-2xl flex flex-col items-center justify-center">
            <RiseLoader loading={true} size={20} className="mt-20"/>
        </div>
    )
}