// import { LayoutConstraint } from "./UI";
import LayoutConstraint, { Attribute, Relation } from "./LayoutConstraint";
import { Util } from "./Util";

class LayoutAnchor<AnchorType> {
    constraintEqualTo(anchor: LayoutAnchor<AnchorType>): LayoutConstraint {
        return new LayoutConstraint({ itemView1: this, attribute1: Attribute.left, relation: Relation.equal, itemView2: anchor, attribute2: Attribute.left, constant: 0, multiplier: 0 })
    }
    // open func constraint(equalTo anchor: NSLayoutAnchor<AnchorType>) -> NSLayoutConstraint

    // open func constraint(greaterThanOrEqualTo anchor: NSLayoutAnchor<AnchorType>) -> NSLayoutConstraint

    // open func constraint(lessThanOrEqualTo anchor: NSLayoutAnchor<AnchorType>) -> NSLayoutConstraint


    // // These methods return an inactive constraint of the form thisAnchor = otherAnchor + constant.
    // open func constraint(equalTo anchor: NSLayoutAnchor<AnchorType>, constant c: CGFloat) -> NSLayoutConstraint

    // open func constraint(greaterThanOrEqualTo anchor: NSLayoutAnchor<AnchorType>, constant c: CGFloat) -> NSLayoutConstraint

    // open func constraint(lessThanOrEqualTo anchor: NSLayoutAnchor<AnchorType>, constant c: CGFloat) -> NSLayoutConstraint
}

export default LayoutAnchor;
