import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo ={
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                    axiosPublic.post('/users',userInfo)
                    .then(res =>{
                        console.log(res.data)
                        navigate('/')
                    })
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline">
                    <FaGoogle />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;