import Payload from "./Pipeline/Payload.js";
import PipelineService from "./Pipeline/PipelineService.js";

class CryptService {
    private pipelineService = new PipelineService(); // TODO: DI

    public async decryptAes256(options: Aes256Options) {
        const payload = (new Payload()).setOptions(options);
        return this.pipelineService.run(payload);
    }
}

export default CryptService;

export type Aes256Options = {
    keyFilePath: string,
    ivFilePath: string,
    authTagFilePath: string,
    cipherTextFilePath: string,
    outputFilePath: string,
};
