import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="bg-neutral-900 w-full min-h-screen text-white antialiased flex items-center justify-center">
            <Link
                to="/"
                className="flex flex-col items-center justify-center ring-2 ring-gray-500 rounded-lg shadow-sm shadow-gray-500 p-4 max-w-2xl cursor-pointer hover:shadow-lg"
            >
                <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
                <h2 className="text-2xl  font-thin">404 - Page Not Found</h2>
                <span className="font-mono text-lg  text-center mt-5">
                    The page you are looking for might have been removed or had its name changed or is temporarily unavailable.
                </span>
            </Link>
        </div>
    );
}
