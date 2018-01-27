import Tracker from './Tracker';

const DISTANCE_FACTOR: number = 1.2;
const ACCELERATION_FACTOR: number = 8.0;

interface Vec2 {
    x: number;
    y: number;
}

class ImageBillboard {
    private image: HTMLImageElement;
    private loaded: boolean = false;
    private currentAcceleration?: Vec2;

    constructor(imagePath: string, public x: number, public y: number, public z: number, public width: number, public height: number) {
        this.image = new Image();
        this.image.onload = (event) => {
            this.loaded = true;
        };
        this.currentAcceleration = {
            x: 0,
            y: 0,
        };
        this.image.src = imagePath;

        this.updateTracking = this.updateTracking.bind(this);
        this.updateTracking();
    }

    private updateTracking() {
        const SPEED = 10.0;
        const moveField = (field: string) => {
            this.currentAcceleration[field] += (Tracker[field] - this.currentAcceleration[field]) / SPEED;
        };
        moveField('x');
        moveField('y');
        requestAnimationFrame(this.updateTracking);
    }

    public render(context: CanvasRenderingContext2D): void {
        type inversion = -1 | 1;
        const addOrientation = (field: string, invert: inversion = 1) => (
            this.currentAcceleration !== undefined ? ((this.currentAcceleration[field] * invert) * ACCELERATION_FACTOR / (DISTANCE_FACTOR * this.z)) : 0
        );
        context.drawImage(
            this.image,
            this.x + addOrientation('x'),
            this.y + addOrientation('y', -1),
            this.width,
            this.height,
        );
    }
}

export default ImageBillboard;
