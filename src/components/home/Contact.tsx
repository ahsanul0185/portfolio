"use client"

import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Contact = () => {
  // web3Forms code
  const [sending, setSending] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setSending("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68d96686-7572-4e9e-9fcd-1acd628e0881");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for hit me up!");
      setSending("");
      setTimeout(() => {
        setResult("");
      }, 5000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
          <div className="w-full lg:w-2/5 xl:w-[45%]">
            <form onSubmit={onSubmit}>
              <div className="w-full">
                <div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-5"
                >
                  <input
                    className="py-3 border border-gray-400/50 dark:border-gray-300/30 px-4 text-md w-full outline-0 focus:ring-1 ring-primary dark:ring-primary-light rounded-lg dark:bg-dark dark:text-gray-50"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="py-3 border border-gray-400/50 dark:border-gray-300/30 px-4 text-md w-full outline-0 focus:ring-1 ring-primary dark:ring-primary-light rounded-lg dark:bg-dark dark:text-gray-50"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>

                <div >
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    className="py-3 border border-gray-400/50 dark:border-gray-300/30 px-4 w-full focus:ring-1 ring-primary dark:ring-primary-light outline-none h-40 resize-none rounded-lg dark:bg-dark dark:text-gray-50"
                    required
                  ></textarea>
                </div>

                <div
                  className="text-right pt-5"
                >
                  {result && (
                    <span

                      className="mr-5 text-primary px-3 py-2"
                    >
                      {result}
                    </span>
                  )}
                  <Button
                    type="submit"
                    icon={<IoSend />}
                    disabled={!!sending}
                  >
                    {!sending ? "Send Message" : sending}
                  </Button>
                </div>
              </div>
            </form>
          </div>
  );
};

export default Contact;
