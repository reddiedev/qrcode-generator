import Base from "../layouts.jsx/base";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
    const [code, setCode] = useState("Hello World!");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setCode(data.code);
    };

    const downloadCode = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = "QRCode";
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };

    return (
        <Base>
            <section className="flex flex-grow w-full h-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-full gap-5 p-5 ">
                    <div className="flex items-center justify-center">
                        <div className="rounded-lg ring-gray-600 ring-2 p-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
                                <h1 className="font-bold text-4xl">Generate QR Code</h1>
                                <span className="font-mono mb-4">Enter message you wish to convert to QR Code</span>
                                <label htmlFor="code" className="font-bold">
                                    Code
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Hello World!"
                                    placeholder="Hello World!"
                                    {...register("code", { required: true, maxLength: 50 })}
                                    className="text-black form-input"
                                />
                                {errors.code && errors.code.type === "required" && <span className="mt-1 text-red-500 font-mono">This field is required!</span>}
                                {errors.code && errors.code.type === "maxLength" && (
                                    <span className="mt-1 text-red-500 font-mono">You may only enter up to 50 characters!</span>
                                )}
                                <div className="flex justify-end mt-7">
                                    <button
                                        type="submit"
                                        className="bg-gray-600 px-2 py-1 rounded-lg cursor-pointer enabled:hover:bg-neutral-900 enabled:hover:ring-2 enabled:hover:ring-red-500 disabled:bg-red-400 font-bold font-mono"
                                        disabled={errors.code}
                                    >
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-y-2">
                            <div className="rounded-lg bg-white p-5 flex items-center justify-center">
                                <QRCode
                                    size={512}
                                    value={code}
                                    id="QRCode"
                                    title="QR Code"
                                    level="L"
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 512 512`}
                                />
                            </div>
                            <div className="flex justify-end items-center">
                                <button className=" px-2 py-1 bg-gray-500 rounded-lg font-bold font-mono" onClick={() => downloadCode()}>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
}
