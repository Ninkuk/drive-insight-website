import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/constants/about";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Drive Insight | About",
    description: "Learn more about Drive Insight",
    // openGraph: {
    //     title: "Drive Insight",
    //     description: "Smart Insights for Smarter Driving",
    //     url: "https://mydriveinsight.com/",
    //     siteName: "Drive Insight",
    //     locale: "en_US",
    //     type: "website",
    // },
};

const About = () => {
    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <div className="mb-16 text-center">
                <h1 className="mb-4">About Drive Insight</h1>
                <p className="text-xl">
                    Empowering drivers with knowledge, protecting their privacy
                </p>
            </div>

            {/* Our Story */}
            <section className="mb-16">
                <h2>Our Story</h2>
                <div className="flex grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4">
                            Drive Insight was born in 2024 from the shared
                            passion of two car enthusiasts, Ninad and Yug. As
                            graduates of Arizona State University, they combined
                            their technical expertise with their love for
                            automobiles to create something unique - an
                            application that gives drivers deep insights into
                            their driving behavior while maintaining absolute
                            data privacy.
                        </p>
                        <p>
                            The journey began with Ninad&apos;s prototype in
                            Python two years ago, driven by a curiosity to
                            understand fuel consumption during peak gas prices.
                            This early experiment evolved into something much
                            more ambitious.
                        </p>
                    </div>
                    <div className="mt-2">
                        <Image
                            src="/quote.png"
                            width={150}
                            height={150}
                            alt="quotes"
                        />
                        <Card>
                            <CardContent className="p-6">
                                {/* FFC300 */}

                                <h3>Educate, don&apos;t just enforce</h3>
                                <p className="italic">
                                    - This principle guides everything we do at
                                    Drive Insight.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The Problem We&apos;re Solving */}
            <section className="mb-16">
                <h2>The Problem We&apos;re Out to Solve</h2>
                <Card className="md:justify-center">
                    <CardContent className="p-6">
                        <h3 className="mb-4">Industry Reality</h3>
                        <ul className="space-y-3">
                            <li>
                                Big corporations selling user driving data to
                                third parties
                            </li>
                            <li>
                                Insurance companies using undisclosed scoring
                                systems
                            </li>
                            <li>
                                Limited scope of existing solutions (GPS speed
                                only)
                            </li>
                        </ul>

                        <h3 className="mb-4">Our Solution</h3>
                        <ul className="space-y-3">
                            <li>
                                Complete data privacy - no cloud storage, you
                                own your data
                            </li>
                            <li>
                                Customizable scoring system aligned with your
                                goals
                            </li>
                            <li>
                                Comprehensive metrics including RPM and fuel
                                usage
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            {/* Team Section */}
            <section className="mb-16">
                <h2 className="text-center">Meet Our Team</h2>
                <p className="mx-auto mb-12 max-w-2xl text-center">
                    We&apos;re a dedicated team of automotive enthusiasts and
                    technology experts working to revolutionize the driving
                    experience.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted mb-4 h-48 w-48 overflow-hidden rounded-full">
                                <Image
                                    src={member.picture}
                                    alt={member.name}
                                    width={48}
                                    height={48}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-2">{member.name}</h3>
                            <p className="text-primary mb-2 font-semibold">
                                {member.role}
                            </p>
                            <p className="text-center">{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Future Vision */}
            <section className="mb-16">
                <h2>The Road Ahead</h2>
                <Card>
                    <CardContent className="p-6">
                        <p className="mb-4">
                            Drive Insight is at the forefront of incorporating
                            AI technology to generate even deeper driving
                            insights. We&apos;re committed to continuous
                            innovation while maintaining our core values of
                            privacy and user empowerment.
                        </p>
                        <p>
                            Our vision extends beyond just data collection -
                            we&apos;re building a platform that helps new
                            drivers become safer and experienced drivers become
                            better, all while keeping their data completely in
                            their control.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <h2>Join Our Journey</h2>
                <p className="mb-8 text-xl">
                    Experience the future of driving insights while maintaining
                    complete control over your data.
                </p>
                <Link href="/install">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 transition-colors">
                        Get Started
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default About;
