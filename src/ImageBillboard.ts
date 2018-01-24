const DISTANCE_FACTOR: number = 1.2;
const ACCELERATION_FACTOR: number = 16.0;

interface Vec3 {
    x: number;
    y: number;
    z: number;
}

class ImageBillboard {
    private image: HTMLImageElement;
    private loaded: boolean = false;
    private isMobile: boolean = false;
    private currentAcceleration?: Vec3;

    constructor(imagePath: string, public x: number, public y: number, public z: number, public width: number, public height: number) {
        this.image = new Image();
        this.image.onload = (event) => {
            this.loaded = true;
        };
        this.image.src = imagePath;
        this.currentAcceleration = {
            x: 0,
            y: 0,
            z: 0,
        };

        this.updateMovement = this.updateMovement.bind(this);
        window.addEventListener("devicemotion", this.updateMovement);
    }

    private updateMovement(event: DeviceMotionEvent) {
        const SPEED = 10.0;
        const acceleration = event.accelerationIncludingGravity;
        const moveField = (field: string) => {
            this.currentAcceleration[field] += (acceleration[field] - this.currentAcceleration[field]) / SPEED;
        };
        moveField('x');
        moveField('y');
        moveField('z');
    }

    public render(context: CanvasRenderingContext2D): void {
        const addOrientation = (field: string) => (
            this.currentAcceleration !== undefined ? (this.currentAcceleration[field] * ACCELERATION_FACTOR / (DISTANCE_FACTOR * this.z)) : 0
        );
        context.drawImage(
            this.image,
            this.x + addOrientation('x'),
            this.y + addOrientation('y'),
            this.width,
            this.height,
        );
    }
}

export default ImageBillboard;
