import render from './Renderer';
import ImageBillboard from './ImageBillboard';

const main = () => {
    const width = window.innerWidth * 1.4;
    const billboards: Array<ImageBillboard> = new Array();
    billboards.push(new ImageBillboard('images/beach.jpg', -(width / 15), -(width / 50), 10, width, width / 1.6));
    billboards.push(new ImageBillboard('images/cloud.png', -50, 100, 3, width, width / 1.5));
    billboards.push(new ImageBillboard('images/cloud.png', -800, -100, 1, width, width / 1.5));
    billboards.push(new ImageBillboard('images/cloud.png', 200, 200, 3, width, width / 1.5));
    render('context', width, width / 1.6, billboards);
};

main();
