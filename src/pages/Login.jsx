import { GoogleLogin } from "@react-oauth/google";
import { useLocation, useNavigate } from "react-router-dom";

import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const res = await api.post("/users/google-login/", {
                token: credentialResponse.credential,
            });

            login(res.data);

            navigate(location.state?.from || "/", {
                replace: true,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#EAF6FF_0%,#F8FBFF_45%,#FFFFFF_100%)]">

            {/* Background Blur */}

            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

            <div className="relative flex min-h-screen items-center justify-center px-5 py-10">

                <div
                    className="
                        w-full
                        max-w-md

                        rounded-[36px]

                        border
                        border-white/60

                        bg-white/90

                        p-8

                        backdrop-blur-xl

                        shadow-[0_25px_80px_rgba(15,23,42,.08)]

                        sm:p-10
                    "
                >

                    {/* Logo */}

                    <div className="flex justify-center">

                        <img
                            src="/images/luka-logo.png"
                            alt="LukaPods"
                            className="h-20 w-auto object-contain"
                        />

                    </div>

                    {/* Heading */}

                    <h1
                        className="
                            mt-8
                            text-center
                            text-3xl
                            font-black
                            tracking-tight
                            text-[#020817]
                        "
                    >
                        Welcome Back
                    </h1>

                    <p
                        className="
                            mt-3
                            text-center
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Sign in securely with your Google account to
                        continue shopping with LukaPods.
                    </p>

                    {/* Google Login */}

                    <div className="mt-10 flex justify-center">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={() =>
                                console.log("Google Login Failed")
                            }
                            useOneTap
                        />
                    </div>

                    {/* Trust Message */}

                    <div className="mt-10 rounded-2xl bg-slate-50 p-5">

                        <p className="text-center text-sm leading-6 text-slate-600">

                            🔒 Secure authentication powered by Google.

                            <br />

                            Your personal information is encrypted and
                            protected.

                        </p>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default Login;