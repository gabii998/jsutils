const router= new Router();

var home=createElement("div","Buen día");
var usuarios=createElement("h2","Usuarios");
var productos=createElement("h2","productos");
home.add(createElement("h2","segundo elemento"))


createChildObjects();

//Definir navegacion
body.mainContainer.listener(EVENTS.click,function(){
    router.navigateTo("/main")
})

body.homeContainer.listener(EVENTS.click,function(){
    router.navigateTo("/home")
});


router.addRoute("/",function(){
    body.content.addChild(home)
})

router.addRoute("/home",function(){
    body.homeContainer.remove()
    body.nav.addChild(body.mainContainer)
    body.content.addChild(homeContent)
})

router.addRoute("/main",function(){
    body.mainContainer.remove();
    body.nav.addChild(body.homeContainer)
})

router.init()