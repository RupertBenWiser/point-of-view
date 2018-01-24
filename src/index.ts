import render from './Renderer';
import ImageBillboard from './ImageBillboard';

const main = () => {
    const billboards: Array<ImageBillboard> = new Array();
    billboards.push(new ImageBillboard('images/beach.jpg', 0, 0, 10, 800, 500));
    billboards.push(new ImageBillboard('images/cloud.png', 0, -200, 3, 800, 519));
    billboards.push(new ImageBillboard('images/cloud.png', -500, -300, 1, 800, 519));
    billboards.push(new ImageBillboard('images/cloud.png', 200, -200, 3, 800, 519));
    render('context', 800, 500, billboards);
};

main();
