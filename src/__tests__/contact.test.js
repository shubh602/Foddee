import {render, screen } from "@testing-library/react";
import Contact from "../Component/Contact";
import "@testing-library/jest-dom";


describe("check componeent rendring",()=>{

    test("testing if componet is rendring or not",()=>{
    //render
    render(<Contact />)

    //querying
    const heading=screen.getByRole("heading")

    //assertion
    expect(heading).toBeInTheDocument()

})

it("should check number of heading",()=>{
   
    //render
    render(<Contact />)
   
    //querying
    const headingCouting=screen.getAllByRole("heading",{level:1})
   
    //querying
    expect(headingCouting.length).toBe(1)
})

it("should check number of heading is not",()=>{
    // render
    render(<Contact />)
   
    //querying
    const headingCouting=screen.getAllByRole("heading",{level:1})
    
    //assertion
    expect(headingCouting.length).not.toBe(2)
})

})
