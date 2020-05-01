class Router{
    constructor(){
        this.routes=[];
    }

    addRoute(uri,callback){
        //Chequear que no sean objetos vacios,y que no estén guardados
        const ruta={uri,callback};
        this.routes.push(ruta);
    }

    navigateTo(path=""){
        window.history.pushState(null,"Caca",path)
        this.init()
    }

    init(){

        //window.addEventListener('hashchange',function(){
            console.log(window.location.pathname)

            this.routes.some(ruta =>{        
                if(window.location.pathname == ruta.uri) return ruta.callback.call(this);
            });
        //})

    

        
    }
}