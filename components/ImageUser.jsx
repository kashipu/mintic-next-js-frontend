import Image from "next/image";
import userImage from "../public/img/userexample.png"
import iconCamera from "../public/img/iconcamera.svg"

export default function ImageUser() {
    return (
        <div>
            <div className="imageUser_content">
                <Image src={userImage}/>
            {/* <button className="btn-dashboard btn-nx-circle btn-nx-primary">
                    <Image src={iconCamera}/>
            </button> */}
            </div>
        </div>
    )
}
