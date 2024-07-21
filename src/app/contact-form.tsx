"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Want to get in touch? Feel free to reach out via mail and let&apos;s
          embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
          <Typography variant="h4" color="white" className="mb-2">
            Contact Information
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-8 text-base !text-gray-500"
          >
            Fill up the form and our Team will get back to you within 24 hours.
          </Typography>

          <div className="flex my-2 gap-5">
            <EnvelopeIcon className="h-6 w-6 text-white" />
            <Typography variant="h6" color="white" className="mb-2">
              hello@mail.com
            </Typography>
          </div>

          <div className="flex items-center gap-5">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
