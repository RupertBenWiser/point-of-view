
import ImageBillboard from './ImageBillboard';

const generateCanvas = (id: string, width: number, height: number): HTMLCanvasElement => {
    const canvasElement = document.createElement('canvas');
    document.getElementById(id).appendChild(canvasElement);
    canvasElement.width = width;
    canvasElement.height = height;
    return canvasElement;
};

const getContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
    const context = canvas.getContext('2d');
    return context;
};

const orderElements = (elements: Array<ImageBillboard>): Array<ImageBillboard> => {
    return elements.sort((a, b) => a.z - b.z);
};

const renderElements = (id: string, width:number, height:number, elements: Array<ImageBillboard>) => {
    const canvas = generateCanvas(id, width, height);
    const context = getContext(canvas);
    const ordedElements = orderElements(elements);
    const render = () => {
        context.clearRect(0, 0, width, height);
        ordedElements.forEach(element => element.render(context));
        requestAnimationFrame(render);
    };
    render();
};

export default renderElements;
