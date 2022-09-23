import { useEffect, useState } from "react"
import axios from 'axios'
import Footer from "../reusuableComps/Footer"
import Header from "../reusuableComps/Header"
import SearchBar from "../reusuableComps/SearchBar"


const HomePage = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const email = localStorage.getItem("emailCookie")

        console.log("Here")
        if(email !== undefined) {

            axios.get(`http://localhost:8080/api/users/findByEmail/${email}`)
            .then((response) => {
                setIsLoading(false)
                setUser(response.data)
            })

        }

    }, [])

    return (

        <div className="full-view flex-col">
            <Header user={user} isLoading={isLoading} />
            <div class="flex-row main-content">
                <div class="flex-col">
                    <div class="logo content-margins">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Googles WebPage" />
                    </div>
                    <SearchBar />
                    <div class="content-center content-margins">
                        <button class="search-buttons">Seach</button>
                        <button class="search-buttons">Im feelin lucky</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage