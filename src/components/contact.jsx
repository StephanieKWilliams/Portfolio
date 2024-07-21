import React, { useState } from "react";
import {
  FaCoins,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { animationVariants } from "./animationVariants";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";


const Contact = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://formsubmit.co/your@gmail.com", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
          // Handle the response data if necessary
          console.log(response.data); // Example: Log the response data for debugging
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  return (
    <div className=" w-full overflow-hidden">
      
       

      {/* contact form section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 pt-13  pb-28 max-sm:px-5 flex max-lg:flex-wrap-reverse  gap-12"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-1/2 max-lg:w-full p-6 py-7 rounded-md flex flex-col h-auto justify-between items-start gap-5"
        >
          <div className="name w-full gap-5 text-white max-sm:flex-col flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              _focus={{ borderWidth: 0.1 }}
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={40}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            max={15}
            maxLength={15}
            autoComplete="off"
            color={"black"}
            _placeholder={{ color: "#696969" }}
            type="number"
            placeholder="Phone No"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <Textarea
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={200}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Message"
            minHeight={"180px"}
            className="w-ful text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#d5515e" }}
            backgroundColor={"#d5515e"}
            color={"white"}
            borderColor={"#d5515e"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={handleSubmit}
            className="w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Submit
          </Button>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/2 flex flex-col gap-5 max-lg:w-full"
        >
          <div className="text-5xl max-md:text-4xl max-md:text-center">
            <h1 className="font-semibold ">
              Contact our support{" "}
              <span className="font-semibold title-font  text-red-500">
                team to provide solutions
              </span>
            </h1>
          </div>
          <p className="text-xl">
          something
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaEnvelope className="text-red-500" />
              </div>
              <p>something</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaPhone className="rotate-90 text-red-500" />
              </div>
              <p>something</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <p>
                something
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      
     
    
    
    
    
      </div>
  );
};

export default Contact;





