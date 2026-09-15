import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Component/Body"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
 

it("should show the filter button after loading", async ()=>{
    render(
     <BrowserRouter>
        <Body />
     </BrowserRouter>   
   )

   const filter = await screen.findByTestId("filter-id")

   fireEvent.click(filter)

   const cards = await screen.findAllByTestId("Menu-id")

   expect(cards.length).toBeGreaterThan(0)
})