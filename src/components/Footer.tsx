import React from "react";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import Button from "./button/Button";
import Input from "./text-input/Input";

export default function Footer() {
  return (
    <div className="w-full bg-[#e1dbcb]">
      <div className="p-16 max-w-7xl mx-auto">
        <div className="flex flex-col bg-footer bg-cover bg-center">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 max-w-[350px]">
              <h1 className="text-2xl mb-8">Faith Baptist Church</h1>
              <div className="text-base">
                Our Church is a family — a place you can call home. It&apos;s
                where you can find hope, healing, and purpose.
              </div>
              <div className="flex gap-6 items-center cursor-pointer my-8">
                <CgFacebook
                  fontSize={24}
                  className="hover:text-[#832732]"
                ></CgFacebook>
                <CgInstagram
                  fontSize={24}
                  className="hover:text-[#832732]"
                ></CgInstagram>
                <FaYoutube
                  fontSize={24}
                  className="hover:text-[#832732]"
                ></FaYoutube>
              </div>
            </div>
            <div>
              <h1 className="text-2xl mb-8">Visit us</h1>
              <div className="text-base">
                <p>Faith Baptist Church</p>
                <p>Erling Skjalgssons gate 13</p>
                <p>4307 Sandnes</p>
                <p>Norway</p>
                <p>Phone: +47 48290578</p>
                <p>Email: paulkalai@gmail.com</p>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl mb-8">Stay Tuned</h1>
              <div className="mb-4 text-base">
                Subscribe to our newsletter and never miss our news
              </div>
              <div className="flex flex-col sm:flex-row items-center pt-4 w-full">
                <div className="flex-1 sm:mr-4 w-full">
                  <Input></Input>
                </div>
                <Button
                  label="Subscribe"
                  className="mt-10 w-full sm:w-auto sm:mt-0"
                ></Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-20">
            <div className="flex flex-col">
              <div className="text-base">
                All Rights Reserved @ Faith Baptist Church, Sandnes{" "}
                {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
