import SignupImage from "../../../../public/images/signup-image.png";
import moontonWhite from "../../../../public/images/moonton-white.svg";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Register() {
    return (
        <>
            <Head title="Sign Up"/>
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src={SignupImage}
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src={moontonWhite} alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Full Name" />
                                    <TextInput
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Email Address" />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Password" />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href={route("prototype.dashboard")}>
                                    <PrimaryButton variant="primary">
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </PrimaryButton>
                                </Link>

                                <Link href={route("prototype.login")}>
                                    <PrimaryButton variant="light-outline">
                                        <span className="text-base font-semibold">
                                            Sign In to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
