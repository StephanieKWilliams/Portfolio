import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "./animationVariants";
import { Button, Input, Textarea, useToast, useColorMode } from "@chakra-ui/react";
import axios from "axios";

const Contact = () => {
  const { colorMode } = useColorMode(); // For light/dark mode
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  // Success Toast
  const showToast = () => {
    toast({
      title: "Thank you! Your message has been successfully sent.",
      description: "We will get back to you shortly.",
      status: "success", // Green color for success
      duration: 4000,
      isClosable: true,
      position: "top",
      containerStyle: { zIndex: 9999 },
      // Optional customization of background color and border
      bg: "green.400", // Green background for success
      color: "white",  // White text color
      borderRadius: "10px", // Rounded corners for a smoother look
      fontWeight: "bold", // Make the message bold
      // Add an icon for extra visual feedback (optional)
      icon: <FaCheckCircle style={{ color: "white" }} />,
    });
  };

  // Error Toast
  const errorToast = (message) => {
    toast({
      title: message,
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: { zIndex: 9999 },
    });
  };

  // Form Data State
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

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    // If validation passes, submit the form
    if (!errors) {
      setBtnLoader(true);
      axios
        .post("https://formsubmit.co/your-email@example.com", formData)
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
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error?.response?.data?.message || "An error occurred");
        });
    }
  };

  // Email Validation
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Validate Form
  const validateForm = (data) => {
    let isValid = true;

    if (!data.firstName.trim()) {
      errorToast("First Name is required");
      isValid = false;
    }

    if (!data.lastName.trim()) {
      errorToast("Last Name is required");
      isValid = false;
    }

    if (!data.email.trim()) {
      errorToast("Email is required");
      isValid = false;
    } else if (!isValidEmail(data.email.trim())) {
      errorToast("Please enter a valid email address");
      isValid = false;
    }

    if (!data.phoneNo.trim()) {
      errorToast("Phone Number is required");
      isValid = false;
    }

    if (!data.message.trim()) {
      errorToast("Message is required");
      isValid = false;
    }

    return isValid ? null : true;
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto w-full p-10 pt-13 pb-28 max-sm:px-5 flex flex-col lg:flex-row gap-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-5"
        >
          <div className="text-3xl text-center md:text-left">
            <h1 className="font-semibold">
              Contact our support{" "}
              <span className="font-semibold text-red-500">team to provide solutions</span>
            </h1>
          </div>
          <p className="text-xl text-center md:text-left">Feel free to reach out for any assistance!</p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center text-lg">
              <FaEnvelope className="text-red-500" />
              <p>support@example.com</p>
            </div>
            <div className="flex gap-3 items-center text-lg">
              <FaPhone className="rotate-90 text-red-500" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex gap-3 items-center text-lg">
              <FaMapMarkerAlt className="text-red-500" />
              <p>123 Street, City, Country</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-full lg:w-1/2 p-6 py-7 rounded-md flex flex-col gap-5"
        >
          <Input
            pl={3}
            fontSize={16}
            variant="outline"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            color={colorMode === "dark" ? "white" : "gray.800"}
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="rounded-2xl p-4 border-2 border-gray-300 focus:ring-blue-500"
          />
          <Input
            pl={3}
            fontSize={16}
            variant="outline"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            color={colorMode === "dark" ? "white" : "gray.800"}
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="rounded-2xl p-4 mt-4 border-2 border-gray-300 focus:ring-blue-500"
          />
          <Input
            pl={3}
            fontSize={16}
            variant="outline"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            color={colorMode === "dark" ? "white" : "gray.800"}
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-2xl p-4 mt-4 border-2 border-gray-300 focus:ring-blue-500"
          />
          <Input
            pl={3}
            fontSize={16}
            variant="outline"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            type="number"
            color={colorMode === "dark" ? "white" : "gray.800"}
            placeholder="Phone No"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="rounded-2xl p-4 mt-4 border-2 border-gray-300 focus:ring-blue-500"
          />
          <Textarea
            pl={3}
            fontSize={16}
            variant="outline"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            color={colorMode === "dark" ? "white" : "gray.800"}
            placeholder="Message"
            minHeight="180px"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl p-2 mt-4 border-2 border-gray-300 focus:ring-blue-500"
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#d5515e" }}
            backgroundColor="#d5515e"
            color="white"
            borderColor="#d5515e"
            variant="outline"
            size="lg"
            isLoading={btnLoader}
            loadingText="Sending..."
            onClick={handleSubmit}
            className="rounded-2xl p-2 w-full mt-4"
            transitionDuration="300ms"
            fontWeight="normal"
            fontSize="16px"
            borderRadius="7px"
          >
            Submit
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
