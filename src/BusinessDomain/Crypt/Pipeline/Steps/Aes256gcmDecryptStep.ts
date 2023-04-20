import Payload from "../Payload.js";
import IStep from "./IStep.js";
import crypto from 'crypto';
import fs from "fs/promises";

class Aes256gcmDecryptStep implements IStep {

    async run(payload: Payload): Promise<Payload> {
        const key256Bit = crypto.createHash('sha256').update(payload.getKey()).digest();

        const decipher = crypto.createDecipheriv('aes-256-gcm', key256Bit, payload.getIv());
        decipher.setAuthTag(Buffer.from(payload.getAuthTag())); // Stuck: Invalid authentication tag length: 30

        const decrypted = Buffer.concat([decipher.update(Buffer.from(key256Bit)), decipher.final()]);
        await fs.writeFile(payload.getOptions().outputFilePath, decrypted);

        return payload.setDecryptedText(decrypted.toString());
    }

}

export default Aes256gcmDecryptStep;
