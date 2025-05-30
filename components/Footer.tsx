import { footerLinks } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import {
    FaDiscord,
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
} from "react-icons/fa6";
import app_store_badge from "../public/App_Store.svg";
import logo from "../public/DIS_Logo_Dark.png";

export const Footer = () => {
    return (
        <div className="w-full bg-slate-900">
            <div className="container flex flex-col gap-6 py-6 md:flex-row">
                {/* COMPANY INFO */}
                <div className="flex flex-1 flex-col gap-4">
                    {/* LOGO */}
                    <Image src={logo} alt="Drive Insight Logo" width={140} />
                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4">
                        <Link
                            href="https://www.tiktok.com/@mydriveinsight"
                            target="_blank">
                            <FaTiktok className="text-2xl" />
                        </Link>
                        {/* <Link href="" target="_blank">
                            <FaFacebook className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaXTwitter className="text-2xl" />
                        </Link> */}
                        <Link
                            href="https://www.instagram.com/mydriveinsight/"
                            target="_blank">
                            <FaInstagram className="text-2xl" />
                        </Link>
                        {/* <Link href="" target="_blank">
                            <FaYoutube className="text-2xl" />
                        </Link> */}
                        <Link
                            href="https://discord.gg/Pznza8ZgNP"
                            target="_blank">
                            <FaDiscord className="text-2xl" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/driveinsight"
                            target="_blank">
                            <FaLinkedin className="text-2xl" />
                        </Link>
                        <Link
                            href="mailto:contact@mydriveinsight.com"
                            target="_blank">
                            <FaEnvelope className="text-2xl" />
                        </Link>
                    </div>
                    {/* STORE BADGES */}
                    <div className="flex gap-4">
                        {/* <Link href="https://google.com" target="_blank">
                            <Image
                                src={google_play_badge}
                                alt="Get it on Google Play"
                                width={100}
                            />
                        </Link> */}
                        <Link
                            href="https://apps.apple.com/us/app/drive-insight-master-the-ride/id6740708847"
                            target="_blank">
                            <Image
                                src={app_store_badge}
                                alt="Download on the App Store"
                                width={100}
                            />
                        </Link>
                    </div>
                </div>

                {/* NAVIGATION */}
                <div className="flex flex-row gap-10">
                    {footerLinks.map(({ category, links }) => (
                        <div className="flex flex-col gap-2" key={category}>
                            <p className="mb-1 font-bold text-slate-300">
                                {category}
                            </p>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.newTab ? "_blank" : "_self"}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* COPYRIGHT AND LEGAL */}
            <div className="flex flex-col justify-between bg-slate-800 px-6 py-2 md:flex-row md:items-center">
                <p className="text-sm">
                    © 2025 SAMAVESH LLC. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/terms">Terms of Service</Link>
                    {/* TODO: add dot separator */}
                    <span>&sdot;</span>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};
