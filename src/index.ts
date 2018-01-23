import render from './Renderer';
import ImageBillboard from './ImageBillboard';

const main = () => {
    const billboards: Array<ImageBillboard> = new Array();
    billboards.push(new ImageBillboard('images/test.png', 0, 0, 0, 300, 300));
    render('context', 600, 400, billboards);
};

main();
