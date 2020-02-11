import {element, by, ElementFinder} from 'protractor'
export class AngularHomePage{
    features:ElementFinder =  element(by.xpath("//a[@title = 'Features']"));
    public clickFeatures(){
        this.features.click()
    }
    
    

}