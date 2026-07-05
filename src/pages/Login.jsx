import { GoogleLogin } from "@react-oauth/google";

import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

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

            const redirectTo = location.state?.from || "/";

            navigate(redirectTo, { replace: true });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center"
        >
            <div
                className="bg-white rounded-xl shadow-lg p-8 w-[400px]"
            >
                <h1
                    className="text-3xl font-bold text-center mb-8"
                >
                    Welcome
                </h1>

                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() =>
                        console.log("Google Login Failed")
                    }
                    useOneTap
                />
            </div>
        </div>
    );
};

export default Login;