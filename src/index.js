class Box {
  constructor() {
    this.box = document.createElement("div");
    document.body.appendChild(this.box);
    this.pos = 50;
    this.styleBox();
    this.moveBox();
  }
  styleBox = () => {
    const { style } = this.box;
    style.width = "100px";
    style.height = "100px";
    style.position = "absolute";
    style.top = `${this.pos}px`;
    style.backgroundColor = "blue";
  };
  moveBox = () => {
    const { box } = this;
    let offset = 10;
    const windowSize = window.innerHeight - box.offsetWidth;
    const maxDistToTravel = windowSize - (windowSize % offset);
    let end = maxDistToTravel;
    setInterval(() => {
      if (this.pos === end) {
        offset *= -1; // reverses current direction
        end = Math.abs(maxDistToTravel - end);
      }
      this.pos += offset;
      box.style.top = this.pos + "px";
      box.style.left = this.pos + "px";
    }, 1000);
  };
}

const box = new Box();
