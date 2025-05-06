import { IoMdCloseCircle } from "react-icons/io";

const ErrorMessage = () => {
    return (
        <p className="absolute top-22 flex items-center justify-center py-1 px-2 gap-2 text-md text-amber-50 rounded-xl border border-white/20 bg-white/10 w-max z-10 ring-2 ring-red-800">
            <IoMdCloseCircle className="text-2xl text-red-800 bg-amber-50 w-max rounded-full" />
            Insert a valid city name!
        </p>
    )
}

export default ErrorMessage