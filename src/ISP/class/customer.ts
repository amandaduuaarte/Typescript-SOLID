import {CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol} 
from './Interfaces/Customer-protocol'

/**
 * extends: The class get all these methods and properties from the parent, 
 * so you don't have to implement.
 * implements: The class has to implement methods and properties.
 */

export class IndividualCustomer implements IndividualCustomerProtocol,CustomerOrder {
    firstName: string;
    lastName: string;
    cpf: string;

 constructor( firstName: string, lastName: string, cpf: string) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.cpf = cpf;
    }

    getName(): string{
        return this.firstName + " " + this.lastName;
    }

    getIDN(): string{
        return this.cpf;
    }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
    name: string; 
    cnpj: string;

    constructor( name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
       }

       getName(): string {
           return this.name
       }

       getIDN(): string{
        return this.cnpj;
    }
}