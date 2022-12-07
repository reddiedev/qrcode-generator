import Footer from "../components/footer";
import Header from "../components/header";

export default function Base({ children }) {
    return (
        <div className="flex flex-col min-h-screen w-full antialiased text-white bg-neutral-900">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
