"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("../WebPages/HomePage");
describe('testcases', function () {
    it("sampleTets", function () {
        protractor_1.browser.get('');
        protractor_1.browser.getTitle().then(function (title) {
            console.log(title);
        });
    });
    it('features click', function () {
        protractor_1.browser.get(' ');
        var angularHomePage = new HomePage_1.AngularHomePage();
        angularHomePage.clickFeatures();
        protractor_1.browser.getTitle().then(function (titleis) {
            console.log(titleis);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3Mvc2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtDO0FBQ2xDLG1EQUFzRDtBQUN0RCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFDYixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNmLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFDakIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsSUFBSSxlQUFlLEdBQW1CLElBQUksMEJBQWUsRUFBRSxDQUFBO1FBQzNELGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMvQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQU87WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==