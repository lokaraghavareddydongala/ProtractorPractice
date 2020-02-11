exports.config ={
    directConnect : true,
    capabilities:{
        browserName: 'chrome'
    },
    chromeDriver:'./Drivers/chromedriver.exe',
    specs:['./JSFilesLocation/Specs/*.js']

}