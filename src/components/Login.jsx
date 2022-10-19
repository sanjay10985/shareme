import React from "react";
// import GOogleLogin from "@leecheuk/react-google-login";
// import GoogleLogin from '@leecheuk/react-google-login'
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Login = () => {

  // const responseGoogle = (response) =>{
  //   localStorage.setItem('user', JSON.stringify(response.profileObj));
  //   const [name, googleId, imageUrl] = response.prfileObj;
  //   console.log(response)
  // }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth,provider);
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const [user] = useAuthState(auth);
  // console.log(user)
  const signOut = () => {
    signOut(auth);
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => ( */}
              { user ? 
                (<button
                type="button"
                onClick={() => auth.signOut()}
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                >
                  LogOut
                </button>) :
                (<button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={googleSignIn}
                  // onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>) 
}
              {/* )} */}
              {/* onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
