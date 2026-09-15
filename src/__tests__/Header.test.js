import { Provider } from "react-redux"
import Header from "../Component/Header"
import Appstore from "../utils/appStore"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";



it("should check if the login Button is present or not",()=>{
    render(
    <BrowserRouter>   
       <Provider store={Appstore}>
            <Header />
       </Provider>
    </BrowserRouter>
    )

    const loginBtn=screen.getByRole("button",{text:"LogIn"})

    expect(loginBtn).toBeInTheDocument()

})


it("should check if cart exist with 0-items or not",()=>{
    render(
        <BrowserRouter>
           <Provider store={Appstore}>
               <Header />
           </Provider>
        </BrowserRouter>
    )

    const Cart=screen.getByText(/Cart/)
    // const Cart=screen.getByText("Cart (0)")
    expect(Cart).toBeInTheDocument()
})


it("should check login click event",()=>{
    render(
        <BrowserRouter>
          <Provider store={Appstore}>
             <Header />
          </Provider>
        </BrowserRouter>
    )

    const loginBtn=screen.getByRole("button",{text:"LogIn"})

    fireEvent.click(loginBtn)

    const logoutBtn=screen.getByRole("button",{text:"LogOut"})
    expect(logoutBtn).toBeInTheDocument()


})