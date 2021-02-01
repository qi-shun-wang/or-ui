type CollisionDetector = (id: string) => boolean;

export class Util {
  static generateID(length: number, detector: CollisionDetector): string {
    const charSet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    if (detector(randomString)) {
      return Util.generateID(length, detector);
    } else {
      return randomString;
    }
  }
}
