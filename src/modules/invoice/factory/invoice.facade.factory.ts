import InvoiceFacade from "../facade/invoice.facade";
import InvoiceFacadeInterface from "../facade/invoice.facade.interface";
import InvoiceRepository from "../repository/invoice.repository";
import FindInvoiceUseCase from "../usecase/find-invoice/find-invoice.usecase";
import GenerateInvoiceUseCase from "../usecase/generate-invoice/generate-invoice.usecase";

export default class InvoiceFacadeFactory {
    static create(): InvoiceFacadeInterface {
        const repository = new InvoiceRepository();
        const generateUsecase = new GenerateInvoiceUseCase(repository);
        const findUsecase = new FindInvoiceUseCase(repository);

        const facade = new InvoiceFacade({
            generateUsecase: generateUsecase,
            findUsecase: findUsecase
        });

        return facade;
    }
}