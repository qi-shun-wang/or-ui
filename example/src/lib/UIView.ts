import { CGPoint, CGRect, CGRectZero, CGSize } from "./CG";
import { Util } from "./Util";
import LayoutConstraint from "./LayoutConstraint";

class UIView {
    private static viewMap: Map<string, UIView> = new Map<string, UIView>();
    private static idLength = 6;
    readonly id: string;

    element: HTMLElement;

    superView?: UIView;
    subviews: UIView[] = [];

    frame: CGRect = CGRectZero;

    backgroundColor = "white";

    enableAutoResize = true;

    readonly constraints: LayoutConstraint[] = [];
    //   addConstraint(constraint: LayoutConstraint): void {
    //     this.constraints.push(constraint);
    //   }
    //   addConstraints(constraints: LayoutConstraint[]): void {
    //     this.constraints.push(...constraints);
    //   }
    //   removeConstraint(constraint: LayoutConstraint): void {
    //     const exist = this.constraints.findIndex(
    //       (item) => item.id === constraint.id
    //     );
    //     if (exist != null) {
    //       delete this.constraints[exist];
    //     }
    //   }
    //   removeConstraints(constraints: LayoutConstraint[]): void {
    //     const exist = this.constraints.findIndex(
    //         (item) => item.id === constraint.id
    //       );
    //       if (exist != null) {
    //         delete this.constraints[exist];
    //       }
    //   }

    constructor(frame: CGRect) {
        this.element = document.createElement("div");
        this.id = Util.generateID(UIView.idLength, (id) => {
            return UIView.viewMap.has(id);
        });
        this.element.id = this.id;
        // this.element.style.position = 'absolute';
        // this.updatePoint(frame.point);
        // this.updateSize(frame.size);
    }
    setBackgroundColor(color: string): void {
        this.backgroundColor = color;
        this.element.style.backgroundColor = color;
    }

    addSubview(view: UIView): void {
        view.superView = this;
        this.subviews.push(view);
        this.element.appendChild(view.element);
    }

    removeFromSuperview(): void {
        this.subviews.forEach((v) => {
            v.removeFromSuperview();
        });

        UIView.viewMap.delete(this.id);
        this.element.remove();
    }
}

// updatePoint(point: CGPoint) {
//     this.element.style.left = `${point.x}px`;
//     this.element.style.top = `${point.y}px`;
// }

// updateSize(size: CGSize) {
//     this.frame.size = size;
//     this.element.style.height = `${size.height}px`;
//     this.element.style.width = `${size.width}px`;
// }

// onWindowResize(size: CGSize) {
//     this.childViews.forEach((v) => {
//         v.onWindowResize(size);
//     });
// }

// updateConstraints(parent: UIView) {
//     console.log(
//         `parent:${parent.id} ${JSON.stringify(parent.frame)} ${parent.enableAutoResize
//         }`
//     );

//     parent.childViews.forEach((child, k) => {
//         this.updateConstraints(child);
//     });
// }

// getFrame(): CGRect {
//     return {
//         point: { x: this.element.clientLeft, y: this.element.clientTop },
//         size: {
//             width: this.element.clientWidth,
//             height: this.element.clientHeight,
//         },
//     };
// }

// setPoint(point: CGPoint) {
//     this.element.style.left = `${point.x}px`;
//     this.element.style.top = `${point.y}px`;
// }

// removeSubView(subView: UIView) {
//     this.childViews.delete(subView.id);
//     this.element.removeChild(subView.element);
// }

// protected static generateID(): string {
//     viewMap.push(`id_${viewMap.length}`)
//     return `id_${viewMap.length}`
// }

// setBackgroundColor(color: string) {
//     this.backgroundColor = color;
//     this.element.style.backgroundColor = color;
// }

// setHeight(value: number) {
//     this.element.style.height = `${value}px`;
// }

// setWidth(value: number) {
//     this.element.style.width = `${value}px`;
// }

// setOnFocusListener(cb: (onFocus: boolean) => void) {
//     this.element.onmouseover = (e) => {
//         cb(true);
//     };

//     this.element.onmouseleave = (e) => {
//         cb(false);
//     };
// }

// setOnDragListener(cb: (point: CGPoint) => void) {
//     let temp = false;

//     document.getElementById('keyWindow')!.addEventListener('mouseup', (e) => {
//         temp = false;
//         this.element.style.userSelect = '';
//     });

//     document.getElementById('keyWindow')!.addEventListener('mousemove', (e) => {
//         if (temp) {
//             cb({ x: e.movementX, y: e.movementY });
//         }
//     });

//     this.element.onmousedown = (e) => {
//         temp = true;
//         this.element.style.userSelect = 'none';
//     };
// }

// setOnClickListener(cb: () => void) {
//     this.element.onclick = (e) => {
//         cb();
//     };
// }
export default UIView;
