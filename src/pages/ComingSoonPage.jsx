import { useState, useEffect } from "react";
import {
    FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube,
    FaPinterestP,
    FaTwitter,
    FaGoogle
} from "react-icons/fa";
import ThreeBackground from "../components/animation";


const ComingSoonPage = () => {
    const targetDate = new Date("January 15, 2025 00:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const time = calculateTimeLeft();
            setTimeLeft(time);
            if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                setIsLive(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Animation */}
            <ThreeBackground />

            <div className="max-w-4xl w-full backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="p-8 md:p-12 flex flex-col items-center text-center">
                    <div className="mb-6 flex items-center justify-center space-x-4">
                        <img
                            src="/images/logo.png"
                            alt="Being Digital Logo"
                            className="h-12 w-auto"
                        />
                        <p className="text-blue-300 font-bold text-3xl">Being Digital</p>
                    </div>

                    {isLive ? (
                        // When Countdown Ends
                        <div className="flex flex-col items-center space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-yellow-300 animate-bounce">
                                🎉 We Are Live Now! 🎉
                            </h1>
                            <p className="text-gray-300 text-lg max-w-2xl">
                                Thank you for your patience. Explore our platform and transform your digital presence today!
                            </p>
                        </div>
                    ) : (
                        // Countdown Display
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                                New Things Coming Soon
                            </h1>
                            <p className="text-gray-300 text-lg mb-12 max-w-2xl">
                                We're crafting a revolutionary platform that will transform your digital presence. Join us on this journey to redefine digital marketing excellence.
                            </p>
                            <div className="grid grid-cols-4 gap-6 mb-12 px-8 py-6 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                                {[
                                    { label: "Days", value: timeLeft.days },
                                    { label: "Hours", value: timeLeft.hours },
                                    { label: "Minutes", value: timeLeft.minutes },
                                    { label: "Seconds", value: timeLeft.seconds },
                                ].map(({ label, value }, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="text-5xl font-extrabold text-white mb-2">
                                            {value.toString().padStart(2, "0")}
                                        </div>
                                        <div className="text-sm uppercase tracking-wide text-blue-200">
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Social Media Links */}
                    <div className="flex gap-3 sm:gap-4 justify-center mt-6">
                        {[
                            {
                                Icon: FaFacebookF,
                                href: "https://www.facebook.com/tltechnologiespvtltd",
                            },
                            {
                                Icon: FaLinkedinIn,
                                href: "https://www.linkedin.com/company/tltechnologiespvtltd/",
                            },
                            {
                                Icon: FaInstagram,
                                href: "https://www.instagram.com/tltechnologiespvtltd/",
                            },
                            {
                                Icon: FaWhatsapp,
                                href: "https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0",
                            },
                            {
                                Icon: FaYoutube,
                                href: "https://www.youtube.com/@tltechnologiespvtltd-sangi",
                            },
                            {
                                Icon: FaPinterestP,
                                href: "https://in.pinterest.com/tltechnologiespvtltd/",
                            },
                            {
                                Icon: FaTwitter,
                                href: "https://x.com/tl_technologies",
                            },
                            {
                                Icon: FaGoogle,
                                href: "https://g.co/kgs/FfvVAaj",
                            },
                        ].map(({ Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                            >
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 text-gray-400 text-sm">
                        © 2024 TL Technologies. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
