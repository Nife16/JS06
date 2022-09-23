import SignUpForm from "../forms/SignUpForm"
import Header from "../reusuableComps/Header"

const SignUp = () => {

    return (
        <div className="full-view flex-col">
            <Header />
            <SignUpForm />
        </div>
    )
}

export default SignUp