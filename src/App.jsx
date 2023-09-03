"use client";

import axios from "axios";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Toast } from "flowbite-react";
export default function ShadowInputs() {
  // toast
  const [showToast, setShowToast] = useState(false);
  const props = { showToast, setShowToast };
  // for user details
  const [email, SetEmail] = useState("");
  const [username, SetUsername] = useState("");

  const [Password, SetPassword] = useState("");

  // handle submit button

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, email, Password);
    const Data = {
      Email: email,
      Username: username,
      password: Password,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/2a1c1e62-f773-4716-8d44-02cc0f3d3f33",
        Data
      )
      .then((response) => {
        console.log(response);
        SetUsername("");
        SetEmail("");
        SetPassword("");
      });
  };
  return (
    <div className="flex justify-center items-center mt-10 bg-slate-300 pb-10 flex-col ">
      <Navbar fluid rounded className="pb-6 mb-6">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WaitlistPal.
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 md:w-fit md:h-fit">
          <Button className="m-4 ">Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#" className=" ">
            <p className="p-4 text-lg">Home</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="">
            <p className="p-4 text-lg">About</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="">
            <p className="p-4 text-lg">Services</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="p-4">
            <p className="p-4 text-lg">Pricing</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="p-4">
            <p className="p-4 text-lg">Contact</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <form
        className="flex max-w-md flex-col gap-4 justify-center "
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block w-screen">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            placeholder="name@flowbite.com"
            required
            shadow
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="username" />
          </div>
          <TextInput
            id="Username"
            required
            shadow
            type="text"
            onChange={(e) => SetUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            required
            shadow
            type="password"
            onChange={(e) => SetPassword(e.target.value)}
            value={Password}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" required shadow type="password" />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label className="flex" htmlFor="agree">
            <p>I agree with the  terms and condition </p>
          </Label>
        </div>
        <Button
          type="submit"
          onClick={() => props.setShowToast(!props.showToast)}
        >
          Register new account
        </Button>
        {props.showToast && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <HiFire className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Set yourself free.</div>
            <Toast.Toggle onDismiss={() => props.setShowToast(false)} />
          </Toast>
        )}
      </form>

      <Footer bgWhite className="mt-6">
        <div className="w-full mt-5">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="WatlistPal.™" href="#" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
