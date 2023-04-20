import { Aes256Options } from "../CryptService.js";

class Payload {
    private options: Aes256Options;
    private key: string;
    private iv: string;
    private authTag: string;
    private cipherText: string;
    private decryptedText: string;

    public getOptions() {
        return this.options;
    }

    public setOptions(options: Aes256Options): this {
        this.options = options;
        return this;
    }

    public getKey() {
        return this.key;
    }

    public setKey(key: string): this {
        this.key = key;
        return this;
    }

    public getIv() {
        return this.iv;
    }

    public setIv(iv: string): this {
        this.iv = iv;
        return this;
    }

    public getAuthTag() {
        return this.authTag;
    }

    public setAuthTag(authTag: string): this {
        this.authTag = authTag;
        return this;
    }

    public getCipherText() {
        return this.cipherText;
    }

    public setCipherText(cipherText: string): this {
        this.cipherText = cipherText;
        return this;
    }

    public getDecryptedText() {
        return this.decryptedText;
    }

    public setDecryptedText(decryptedText: string): this {
        this.decryptedText = decryptedText;
        return this;
    }

}

export default Payload;
