import Payload from "../Payload.js";
import IStep from "./IStep.js";
import fs from "fs/promises";

class ReadFilesStep implements IStep {
    async run(payload: Payload): Promise<Payload> {
        const options = payload.getOptions();

        try {
            payload.setKey((await fs.readFile(options.keyFilePath)).toString());
            payload.setIv((await fs.readFile(options.ivFilePath)).toString());
            payload.setAuthTag((await fs.readFile(options.authTagFilePath)).toString());
            payload.setCipherText((await fs.readFile(options.cipherTextFilePath)).toString());
        } catch(error) {
            throw new Error(`Error: ${error.message}`); // TODO: Optimize error handling
        }

        return payload;
    }
}

export default ReadFilesStep;
