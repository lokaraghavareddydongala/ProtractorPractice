import {browser} from 'protractor'
import { AngularHomePage } from '../WebPages/HomePage'
describe('testcases', function(){
    it("sampleTets", function(){
        browser.get('https://angular.io/')
        browser.getTitle().then(function(title){
            console.log(title)
        })
       
    })
    it('features click', function(){
        browser.get('https://angular.io/')
        var angularHomePage:AngularHomePage = new AngularHomePage()
        angularHomePage.clickFeatures()
        browser.getTitle().then(function(titleis){
            console.log(titleis)
        })
    })
})