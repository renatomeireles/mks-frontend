import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  it("should render the correct logo and subtitle", () => {
    render(<Header setIsVisible={() => {}} quantityProducts={0} />);
    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument()
  });

  it("should display the cart icon with the correct quantity count", () => {
    const quantity = 5;
    render(<Header setIsVisible={() => {}} quantityProducts={quantity} />);
    expect(screen.getByAltText("Carrinho")).toBeInTheDocument();
    expect(screen.getByText(quantity.toString())).toBeInTheDocument();
  });

  it("should call setIsVisible when the cart icon is clicked", () => {
    const setIsVisible = jest.fn();
    render(<Header setIsVisible={setIsVisible} quantityProducts={0} />);
    fireEvent.click(screen.getByAltText("Carrinho"));
    expect(setIsVisible).toHaveBeenCalled();
  });

  it("should display the Cart component when isVisible is true", () => {
    render(<Header setIsVisible={() => {}} quantityProducts={0} />);
    fireEvent.click(screen.getByAltText("Carrinho"));
    expect(screen.getByTestId("cart-component")).toBeInTheDocument();
  });

  it("should not display the Cart component when isVisible is false", () => {
    render(<Header setIsVisible={() => {}} quantityProducts={0} />);
    expect(screen.queryByTestId("cart-component")).not.toBeInTheDocument();
  });
});