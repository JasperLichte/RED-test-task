abstract class Handler {
    protected request;
    protected response;

    public setRequest(request): this {
        this.request = request;
        return this;
    }

    public setResponse(response): this {
        this.response = response;
        return this;
    }

    abstract run(): void;
}

export default Handler;
