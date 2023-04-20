import Payload from "./Payload.js";
import Aes256gcmDecryptStep from "./Steps/Aes256gcmDecryptStep.js";
import IStep from './Steps/IStep.js';
import ReadFilesStep from "./Steps/ReadFilesStep.js";

class PipelineService {
    private steps: IStep[] = [];

    constructor() {
        this.steps = [ // TODO: create step objects lazily
            new ReadFilesStep,
            new Aes256gcmDecryptStep,
        ];
    }

    public async run(payload: Payload): Promise<Payload> {
        for (const step of this.steps) {
            payload = await step.run(payload);
        }
        return payload;
    }
}

export default PipelineService;
