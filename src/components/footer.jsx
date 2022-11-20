import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="w-full h-16 flex  bg-neutral-900 text-white items-center justify-center px-20 border-t-2 border-gray-600">
            <Link to="/" className="flex justify-center gap-x-2 items-stretch">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span className="font-bold font-sans">QR Code Generator</span>
            </Link>
        </div>
    );
}
