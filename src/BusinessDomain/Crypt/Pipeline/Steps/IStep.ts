import Payload from '../Payload.js';

interface IStep {
    run(payload: Payload): Promise<Payload>;
}

export default IStep;
