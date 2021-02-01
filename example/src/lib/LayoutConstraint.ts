import { Util } from "./Util";

class LayoutConstraint {
  private static constraintsMap: Map<string, LayoutConstraint> = new Map<
    string,
    LayoutConstraint
  >();
  private static idLength = 12;

  readonly id: string;

  // need setter getter
  isActive = false;

  constructor() {
    this.id = Util.generateID(LayoutConstraint.idLength, (id) => {
      return LayoutConstraint.constraintsMap.has(id);
    });
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
