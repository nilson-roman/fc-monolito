import UseCaseInterface from "../../@shared/usecase/use-case.interface"
import InvoiceFacadeInterface, { FindInvoiceFacadeInputDto, FindInvoiceFacadeOutputDto, GenerateInvoiceFacadeInputDto } from "./invoice.facade.interface"

export interface UseCaseProps {
    generateUsecase: UseCaseInterface
    findUsecase: UseCaseInterface
}

export default class InvoiceFacade implements InvoiceFacadeInterface {
    private _generateUsecase: UseCaseInterface
    private _findUsecase: UseCaseInterface

    constructor(usecaseProps: UseCaseProps) {
        this._generateUsecase = usecaseProps.generateUsecase
        this._findUsecase = usecaseProps.findUsecase
    }

    async generate(input: GenerateInvoiceFacadeInputDto): Promise<FindInvoiceFacadeOutputDto> {
        return await this._generateUsecase.execute(input)
    }

    async find(id: FindInvoiceFacadeInputDto): Promise<FindInvoiceFacadeOutputDto> {
        return await this._findUsecase.execute(id)
    }
}