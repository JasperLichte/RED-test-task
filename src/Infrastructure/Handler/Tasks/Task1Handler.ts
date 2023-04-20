import Handler from "../Handler.js";
import CryptService from '../../../BusinessDomain/Crypt/CryptService.js';

class Task1Handler extends Handler {
    private cryptService = new CryptService(); // TODO: DI

    run(): void {
        this.response.setHeader('Content-Type', 'application/json');

        this.cryptService.decryptAes256({
            keyFilePath: "task/secret.key",
            ivFilePath: "task/iv.txt",
            authTagFilePath: "task/auth.txt",
            cipherTextFilePath: "task/secret.enc",
            outputFilePath: "decypted.zip",
        }).then(payload => {
            this.response.end(JSON.stringify({
                result: payload.getOptions().outputFilePath
            }))
        });
    }
}

export default Task1Handler;
