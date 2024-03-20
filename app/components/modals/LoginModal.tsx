'use client';

import { useState } from "react";

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Your email address" type="email" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
            
                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Clicked")}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;