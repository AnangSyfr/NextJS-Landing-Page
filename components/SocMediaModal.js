import { useState, useEffect } from "react";
import { facebookProvider, googleProvider } from "../config/authMethod";
import socialMediaAuth from "../services/auth";
import { auth } from "../config/firebase-config";

const SocMediaModal = (props) => {
    const { isHidden, onClose } = props;
    const { user } = props;
    const handleClick = async (provider) => {
        const res = await socialMediaAuth(provider);
    };

    return (
        <div
            className={`fixed transition-all top-0 w-full h-full left-0 ${isHidden}`}
        >
            <div className="flex">
                <div className="bg-white w-8/12 mx-auto mt-20 py-5 px-10 space-x-3">
                    <div className="text-right">
                        <img
                            src="x.svg"
                            className="inline-block cursor-pointer"
                            onClick={onClose}
                        />
                    </div>
                    {user === null ? (
                        <>
                            <button
                                className="bg-blue-600 py-3 px-10 text-white"
                                onClick={() => handleClick(facebookProvider)}
                            >
                                Facebook
                            </button>
                            <button
                                className="bg-blue-600 py-3 px-10 text-white"
                                onClick={() => handleClick(googleProvider)}
                            >
                                Gmail
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center">
                            <div className="mr-3">
                                Welcome, {user.displayName}
                            </div>
                            <div>
                                <button
                                    className="bg-blue-600 py-3 px-10 text-white"
                                    onClick={() => auth.signOut()}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SocMediaModal;
