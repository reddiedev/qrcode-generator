import Base from "../layouts.jsx/base";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
    let [code, setCode] = useState("Hello world!");
    return (
        <Base>
            <section className="flex flex-grow w-full h-full">
                <div className="grid grid-cols-2 w-full min-h-full">
                    <div></div>
                    <div className="flex items-center justify-center">
                        <div className="rounded-lg bg-white p-5">
                            <QRCode size={256} value={code} />
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
}
