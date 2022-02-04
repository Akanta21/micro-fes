import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

export default function placeAddToCart(el, id) {
  console.log("renderd");
  render(() => <AddToCart id={id} />, el);
}
