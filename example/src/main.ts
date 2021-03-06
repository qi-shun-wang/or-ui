import { CGPointZero, CGPoint, CGRectZero } from "./lib/CG";
import { UIView, UIWindow } from "./lib/UI";

console.log("Main");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  const p1: CGPoint = { x: 0, y: 2 };
  const view: UIView = new UIView(CGRectZero);
  const window = new UIWindow();
  view.setBackgroundColor('white')
  window.addSubview(view)
  window.setBackgroundColor("red");
  document.body.appendChild(window.element);
  console.log(CGPointZero);
  console.log(p1);
  console.log(view);
});
