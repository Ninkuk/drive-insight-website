import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    FaDiscord,
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="container flex flex-col gap-5 lg:px-60">
            <div className="flex flex-col items-center gap-2">
                <h1>Contact Us</h1>
                {/* <p className="text-center">
                    Most of the answers you&apos;re looking for may already be
                    in our FAQ section. If you still need help, just fill out
                    the form below, and we&apos;ll get back to you shortly.
                </p> */}
                {/* <div className="flex items-center justify-center gap-2">
                    <Button variant="default" size="lg">
                        FAQ
                    </Button>
                    <Button variant="default" size="lg">
                        Guides
                    </Button>
                </div> */}

                <p>For support, reach out to us via email or social media.</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button
                    className="w-full bg-red-500 text-white md:w-1/4"
                    variant="link"
                    asChild>
                    <Link
                        href="mailto:contact@mydriveinsight.com"
                        target="_blank">
                        <FaEnvelope />
                        Email
                    </Link>
                </Button>
                <Button
                    className="w-full bg-indigo-500 text-white md:w-1/4"
                    variant="link"
                    asChild>
                    <Link href="https://discord.gg/Pznza8ZgNP" target="_blank">
                        <FaDiscord />
                        Discord
                    </Link>
                </Button>
                <Button
                    className="w-full bg-fuchsia-500 text-white md:w-1/4"
                    variant="link"
                    asChild>
                    <Link
                        href="https://www.instagram.com/mydriveinsight/"
                        target="_blank">
                        <FaInstagram />
                        Instagram
                    </Link>
                </Button>
                <Button
                    className="w-full bg-blue-700 text-white md:w-1/4"
                    variant="link"
                    asChild>
                    <Link
                        href="https://www.linkedin.com/company/driveinsight/"
                        target="_blank">
                        <FaLinkedin />
                        LinkedIn
                    </Link>
                </Button>
            </div>

            {/* Contact Form */}
            {/* <div className="flex-1 rounded-lg text-card-foreground shadow-md">
                <ContactForm />
            </div> */}

            {/* <p className="text-center">or</p> */}

            {/* //TODO: Color these buttons. Red for email, green for text/call, purple discord, blue for twitter */}
            {/* <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                <Button className="w-full bg-red-500 text-white" variant="link">
                    <FaEnvelope />
                    Email
                </Button>
                <Button
                    className="w-full bg-green-500 text-white"
                    variant="link"
                    size="lg">
                    <FaPhone />
                    Text/Call
                </Button>
                <Button
                    className="w-full bg-indigo-500 text-white"
                    variant="link"
                    size="lg">
                    <FaDiscord />
                    Discord
                </Button>
                <Button
                    className="w-full bg-blue-500 text-white"
                    variant="link"
                    size="lg">
                    <FaTwitter />
                    Twitter
                </Button>
            </div> */}
        </div>
    );
}
