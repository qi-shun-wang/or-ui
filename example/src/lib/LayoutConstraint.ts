import LayoutAnchor from "./LayoutAnchor";
import { Util } from "./Util";

export enum Attribute {
  notAnAttribute = 0,
  left = 1,
  right = 2,
  top = 3,
  bottom = 4,
  leading = 5,
  trailing = 6,
  width = 7,
  height = 8,
  centerX = 9,
  centerY = 10,
  lastBaseline = 11
}
export enum Relation {
  lessThanOrEqual = -1, equal = 0, greaterThanOrEqual = 1,
}
interface Constraint {
  itemView1: LayoutAnchor<any>
  attribute1: Attribute,
  relation: Relation,
  itemView2?: LayoutAnchor<any>,
  attribute2: Attribute,
  multiplier: number,
  constant: number,
}

class LayoutConstraint {
  private static constraintsMap: Map<string, LayoutConstraint> = new Map<
    string,
    LayoutConstraint
  >();
  private static idLength = 12;

  readonly id: string;

  // need setter getter
  isActive = false;

  firstItem?: LayoutAnchor<any>
  secondItem?: LayoutAnchor<any>

  firstAttribute: Attribute = Attribute.notAnAttribute
  secondAttribute: Attribute = Attribute.notAnAttribute

  relation: Relation
  multiplier = 1
  constant = 0

  constructor(constraint?: Constraint) {
    this.id = Util.generateID(LayoutConstraint.idLength, (id) => {
      return LayoutConstraint.constraintsMap.has(id);
    });
    this.firstItem = !constraint ? undefined : constraint.itemView1;
    this.secondItem = !constraint ? undefined : constraint.itemView2;
    this.firstAttribute = !constraint ? Attribute.notAnAttribute : constraint.attribute1;
    this.secondAttribute = !constraint ? Attribute.notAnAttribute : constraint.attribute2;
    this.multiplier = !constraint ? 0 : constraint.multiplier;
    this.relation = !constraint ? 0 : constraint.relation;
  }

  static activate(constraints: LayoutConstraint[]): void {
    constraints.forEach((c) => {
      if (LayoutConstraint.constraintsMap.has(c.id)) {
        c.isActive = true;
      } else {
        LayoutConstraint.constraintsMap.set(c.id, c);
      }
    });
  }

  static deactivate(constraints: LayoutConstraint[]): void {
    constraints.forEach((c) => {
      if (LayoutConstraint.constraintsMap.has(c.id)) {
        c.isActive = false;
      } else {
        LayoutConstraint.constraintsMap.set(c.id, c);
      }
    });
  }
}

export default LayoutConstraint;
