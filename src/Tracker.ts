import 'tracking';
import faceData from './data/face';

declare var tracking: any;

console.log(tracking);

tracking.ViolaJones.classifiers.face = faceData;
const tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

const trackingData = {
    x: 0,
    y: 0,
};

tracking.track('#video', tracker, { camera: true });

tracker.on('track', function (event) {
    if (event.data.length) {
        trackingData.x = event.data[0].x;
        trackingData.y = event.data[0].y;
    }
});

export default trackingData;
