import LoadingSpinner from './LoadingSpinner'

const Header = (props) => {


    const signInButtons = () => {
        
        if (props.isLoading === true) {
            return (
                <LoadingSpinner />
            )

        } else if (props.user !== null) {

            return (
                <button class="header-button">N</button>
            )

        } else {
            return (
                <div>
                    <a class="header-links" href="/sign-up">Sign Up</a>
                    <a class="header-links" href="/sign-up">Sign Up</a>
                </div>
            )
        }
    }

    return (
        <header class="header flex-row">
            <div class="half-width">
                <a class="header-links" href="#">About</a>
                <a class="header-links" href="#">Store</a>
            </div>
            <div class="half-width content-right">
                <a class="header-links" href="#">Gmail</a>
                <a class="header-links" href="#">Images</a>
                {signInButtons()}
            </div>
        </header>
    )
}

export default Header
