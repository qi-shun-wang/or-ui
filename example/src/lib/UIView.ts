import { CGPoint, CGRect, CGRectZero, CGSize } from './CG';

class UIView {
    static viewMap: Map<string, UIView> = new Map<string, UIView>();
    static idLength = 12
    static generateID(): string {

        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < UIView.idLength; i++) {
            const randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        if (this.viewMap.has(randomString)) {
            return UIView.generateID()
        } else {
            return randomString;
        }
    }
    id: string;

    element: HTMLElement;

    superView?: UIView
    childViews: Map<string, UIView> = new Map<string, UIView>();

    frame: CGRect = CGRectZero;

    backgroundColor = 'white';

    enableAutoResize = true;

    constructor(frame: CGRect) {
        this.element = document.createElement('div');
        this.id = UIView.generateID();
        // this.element.id = this.id;
        // this.element.style.position = 'absolute';
        // this.updatePoint(frame.point);
        // this.updateSize(frame.size);
    }
    setBackgroundColor(color: string): void {
        this.backgroundColor = color
        this.element.style.backgroundColor = color
    }
 
    addView(subView: UIView) {
        subView.superView = this
        this.childViews.set(subView.id, subView);
        this.element.appendChild(subView.element);
    }
    removeSubView(subview:UIView){
        this.element.removeChild(subview.element)
        
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
export default UIView
