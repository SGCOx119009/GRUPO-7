class Nodo{
    dato=0;
    liga=null;
}
export class Lista{
    INICIO=null;
    canvas=null;
    constructor(canvas) {this.canvas = canvas;}

    ////////////////////////////////////////////////////////////////////////////////
    //                INSERCION DE LISTAS SIMPLEMENTES LIGADAS                    //
    ////////////////////////////////////////////////////////////////////////////////
    insertar_inicio(elemento){
        var P_cab=this.INICIO;
        var inicio=new Nodo();
        inicio.dato=elemento;
        inicio.liga=P_cab;
        P_cab=inicio;
        this.INICIO=P_cab;
    }///////////////////////////////////////////////////////////////////////////////
    insertar_final(elemento){
        var P_cab=this.INICIO;
        var aux=P_cab;
        while(aux.liga!=null){aux=aux.liga; }
        var nuevo=new Nodo();
        nuevo.dato=elemento;
        nuevo.liga=null;
        aux.liga=nuevo;
        this.INICIO=P_cab;
    }///////////////////////////////////////////////////////////////////////////////  
    insertar_antes_X (elemento,valor){
        var P_cab=this.INICIO;
        var BAND=1;
        var adelante=P_cab;
        var atras;
        while ( adelante.dato!=valor && BAND==1 ){
            if(adelante.liga!=null){
                atras=adelante;
                adelante=adelante.liga;
            }
            else BAND=0;
        }
        if(BAND==1){
            var nuevo=new Nodo();
            nuevo.dato=elemento;
            if(P_cab==adelante){
                nuevo.liga=P_cab;
                P_cab=nuevo;
            }
            else{
                atras.liga=nuevo;
                nuevo.liga=adelante;
            }
        }
        else{ throw new Error("EL NODO REFERENCIAL NO SE ENCUENTRA EN LA LISTA");}
        this.INICIO=P_cab;
    }/////////////////////////////////////////////////////////////////////////////// 
    insertar_despues_X (elemento,valor){
        var P_cab=this.INICIO;
        var BAND=1;
        var atras=P_cab;
        var adelante=null;
        while ( atras.dato!=valor && BAND==1 ){
            if(atras.liga!=null){
                atras=atras.liga;
                adelante=atras.liga;
            }
            else BAND=0;
        }
        if(BAND==1){
            if(atras==P_cab){
                var nuevo=new Nodo();
                var aux=P_cab.liga;
                nuevo.dato=elemento;
                atras.liga=nuevo;
                nuevo.liga=aux;
            }
            else{
                var nuevo=new Nodo();
                nuevo.dato=elemento;
                atras.liga=nuevo;
                nuevo.liga=adelante;
            }
        }
        else throw new Error("EL NODO REFERENCIAL NO SE ENCUENTRA EN LA LISTA");
        this.INICIO=P_cab;
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                 ELIMINACION DE LISTAS SIMPLEMENTES LIGADAS                 //
    ////////////////////////////////////////////////////////////////////////////////
    eliminar_inicio(){
        var P_cab=this.INICIO;
        var aux=P_cab;
        P_cab=P_cab.liga;
        this.INICIO=P_cab;
    }
    ////////////////////////////////////////////////////////////////////////////////
    eliminar_final(){
        var P_cab=this.INICIO;
        var adelante=P_cab;
        var atras;
        if(P_cab.liga==null) {
        P_cab=null;
        }
        else{
            while(adelante.liga!=null){
                atras=adelante;
                adelante=adelante.liga;
            }
            atras.liga=null;
        }
        this.INICIO=P_cab;
    }
    ////////////////////////////////////////////////////////////////////////////////
    eliminar_X(elemento){
        var P_cab=this.INICIO;
        var BAND=1;
        var nuevo=P_cab;
        var atras;
        while ( nuevo.dato!=elemento && BAND==1 ){
            if(nuevo.liga!=null){
                atras=nuevo;
                nuevo=nuevo.liga;
            }
            else BAND=0;
        }
        if(BAND==0) throw new Error("EL NODO REFERENCIAL NO SE ENCUENTRA EN LA LISTA ");
        else{
            if(nuevo==P_cab) P_cab=nuevo.liga;
            else atras.liga=nuevo.liga;
        }
        this.INICIO=P_cab;
    }
    ////////////////////////////////////////////////////////////////////////////////
    eliminar_antes_X(valor){
        var P_cab=this.INICIO;
        if(P_cab!=null){
            var BAND=1;
            var BAND2=0;
            var adelante=P_cab;
            var nuevo;
            while(adelante.dato!=valor && BAND==1 && BAND2==0){
                if(adelante.liga!=null){
                    nuevo=adelante;
                    adelante=adelante.liga;
                    if(adelante.liga!=null){if(adelante.liga.dato==valor) BAND2=1;}
                }
                else BAND=0;
            }
            if(BAND==1){
                if(adelante!=P_cab){
                    if(nuevo==P_cab&&adelante.dato==valor) P_cab=adelante;
                    else nuevo.liga=adelante.liga;
                }else{
                    throw new Error("No hay elemento atras");
                }
            }
            else throw new Error("EL NODO REFERENCIAL NO SE ENCUENTRA EN LA LISTA ");
        }
        this.INICIO=P_cab;
    }
    ////////////////////////////////////////////////////////////////////////////////
    eliminar_despues_X(valor){
        var P_cab=this.INICIO;
        if(P_cab.liga!=null){
            var BAND=1;
            var adelante=P_cab;
            var aux;
            while(adelante.dato!=valor && BAND==1){
                if(adelante.liga!=null){
                    adelante=adelante.liga;
                    aux=adelante.liga;
                }
                else BAND=0;
            }
            if(adelante==P_cab) P_cab.liga=P_cab.liga.liga;
            else{
                if(BAND==0) throw new Error("EL NODO REFERENCIAL NO SE ENCUENTRA EN LA LISTA ");
                else{
                    if(adelante.liga==null){
                        throw new Error("No hay elemento despues de este ");
                    }
                    if(aux!=null) adelante.liga=aux.liga;
                }
            }  
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                          IMPRESION DE LA LISTA                             //
    ////////////////////////////////////////////////////////////////////////////////
    buscar(elemento){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.dato==elemento){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
        }
        return encontrado;
    }///////////////////////////////////////////////////////////////////////////////
    isVacio(){
        if(this.INICIO==null)
           return true;
        else 
           return false;
      }/////////////////////////////////////////////////////////////////////////////
    dibujarNodosLog(){
        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.dato+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }////////////////////////////////////////////////////////////////////////////////
    dibujarNodos(elemento){
        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var nodo=null;
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;				
        
        //Dibujar rectangulo
        while(tmp!=null){ 
            if(elemento != undefined && tmp.dato==elemento){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(255,255,255)";//GRIS
                ctx.fillRect (x,y, 55,30);
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.dato=tmp.dato;
            }
            else{
                ctx.beginPath();
                ctx.fillStyle = "#05739f";  //cian
                ctx.fillRect (x,y, 55,30);
               }  
            //texto
            ctx.fillStyle="black";
            ctx.font = '15px Arial Black';
            ctx.fillText(tmp.dato,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.strokeStyle="white";
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="white";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }
        //Temporizador
        if(nodo!=null){
            setTimeout(function(){
                ctx.beginPath();
                ctx.fillStyle = "#05739f";//cian
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);

                //texto
                ctx.fillStyle="black";
                ctx.font = '15px Arial Black';
                ctx.fillText(nodo.dato,nodo.x+20,nodo.y+20);
                ctx.closePath();
            },1500);

        }
        
    }
}