import { BaseDependencies, BaseEyes, BaseHands } from '../BaseRobot';


export class Eyes extends BaseEyes {
}


export class Hands extends BaseHands {
    clearTextOnDOM(dom: string){
        cy.get(dom).clear()
    }
}

export class Dependencies extends BaseDependencies {}