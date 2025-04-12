import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    FaDiscord,
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";

export default function Support() {
    return (
        <div className="container mx-auto flex h-full flex-col gap-10 py-5 lg:py-10">
            <div>
                <h2 className="text-center">Contact Us</h2>
                <p className="text-center">
                    For support, reach out to us via email or social media.
                </p>
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

            {/* // TODO: Add contact form */}
            {/* <ContactForm /> */}
        </div>
    );
}
