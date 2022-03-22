const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
     get startButton() {
        return $('#start button'); //uses Element with certain text selector
   }
  /**
   * overwrite specific options to adapt it to page object
   */
   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }

  async click_more(test){
    it(test.text, async () => {
        await this.open(test.path);
        
        for(var i=0;i<test.stop;i++){
            await $(test.element).click()
            await browser.pause(1000)
            
        }
        for(var i=0;i<test.stop;i++){
            var j=i+1
            await expect($(test.expect+'['+j+']')).toBeExisting();
            
            
        }
        
    });
  }

  async click_and_delete(test,i){
    it(test.quit[i].text, async () => {
        await this.open(test.but.path);
        
        for(var j=0;j<test.but.stop;j++){
            await $(test.but.element).click()
            
            
        }
        for(var j=0;j<test.quit[i].number;j++){
            await $(test.but.expect).click()
           



        }
        for(var j=0;j<test.but.stop-test.quit[i].number;j++){
            var k=j+1
            await expect($(test.but.expect+'['+k+']')).toBeExisting()
            



        }
        var k=test.but.stop-test.quit[i].number
        for(var j=0;j<test.quit[i].number;j++){
            var n=j+k+1
            await expect($(test.but.expect+'['+n+']')).not.toBeExisting()
            



        }

        
    });
  }




  async exist(test) {
        it('button exist', async () => {
        await this.open(test.path);
        await browser.pause(1000)
        await expect($(test.element)).toBeExisting();
        await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  }
  get htest(){
      return $('#finish h4');
  }
  open(path) {
      return super.open(path);
  }
}

module.exports = new DynamicLoadingPage();