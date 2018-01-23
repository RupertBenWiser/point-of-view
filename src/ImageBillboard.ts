
class ImageBillboard {
    private image: HTMLImageElement;
    private loaded: boolean = false;

    constructor(imagePath: string, public x: number, public y: number, public z: number, public width: number, public height: number) {
        this.image = new Image();
        this.image.onload = (event) => {
            this.loaded = true;
        };
        this.image.src = imagePath;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default ImageBillboard;
