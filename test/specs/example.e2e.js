const DynamicLoadingPage = require('../pageobjects/addremove.page');

var butadd={path:"add_remove_elements/", element:'button',text: 'should click the Add Element buttton 5 times'}
var butclick={path:"add_remove_elements/", element:'.example button',text: 'should click the Add Element buttton 5 times',stop:5,expect:'//div[2]/div/div/div/button'}
var buteliminate={but:butclick,quit:[{number:2,text:'should delete two "Delete" elements'},{number:3,text:'should have only three "Delete" elements remaining'}]}


describe('Add element', () => {
    DynamicLoadingPage.exist(butadd);
    DynamicLoadingPage.click_more(butclick)
    DynamicLoadingPage.click_and_delete(buteliminate,0)
});


