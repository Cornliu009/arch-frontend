import { AxiosResponse } from 'axios';

// TODO refactor KeyedErrors

export default class KeyedError {
    private readonly errorResponse: any;
    private readonly errorData: any;

    constructor(errorResponse: AxiosResponse) {
        this.errorResponse = errorResponse;
        this.errorData = errorResponse.data;
    }

    get isError(): boolean {
        return this.errorData.fail;
    }

    get status(): number {
        return this.errorResponse.status;
    }

    get includesJwtError(): boolean {
        return this.errorData.message.includes('JWT');
    }

    get errorMessage(): string {
        return this.errorData.message;
    }
}
