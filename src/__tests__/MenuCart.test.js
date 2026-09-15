import { render, screen } from "@testing-library/react"
import ProductCart , {PromotedCart} from "../Component/MenuCart"
import { MockDataUnit } from "../utils/MockDataUnit"
import "@testing-library/jest-dom";


it("should check if the component is render by using the props",()=>{
    render(<ProductCart resdata={MockDataUnit.resdata} />)

   const name=screen.getByText("Sab Ghar Tak Foods")

    expect(name).toBeInTheDocument()

})


it("should check for promoted label working",()=>{

    const PromotedCartTest=PromotedCart(ProductCart)

    render(<PromotedCartTest resdata={MockDataUnit.resdata} />)

    const label=screen.getByText("Sab Ghar Tak Foods")

    expect(label).toBeInTheDocument()
})