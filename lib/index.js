import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

////////////////////////////////////////////////////////////////////////////////
//                INSERCION DE LISTAS SIMPLEMENTES LIGADAS                    //
////////////////////////////////////////////////////////////////////////////////
export async function insertar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        var elemento = await bootbox_prompt("ingrese valor del nodo");
        if(elemento==null) return;
        if(lista.buscar(elemento)==true) throw new Error("EL NODO YA HA SIDO INGRESADO");
        lista.insertar_inicio(elemento);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(elemento);
    }catch(e){await bootbox_alert(e.message);}
}////////////////////////////////////////////////////////
export async function insertar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}  
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA")
        var elemento = await bootbox_prompt("ingrese valor del nodo");
        if(elemento==null) return;
        if(lista.buscar(elemento)==true) throw new Error("EL NODO YA HA SIDO INGRESADO");
        lista.insertar_final(elemento);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(elemento);
    }catch(e){await bootbox_alert(e.message);}
}//////////////////////////////////////////////////////////
export async function insertar_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA")
        var elemento = await bootbox_prompt("ingrese valor del nodo");
        if(elemento==null) return;
        if(lista.buscar(elemento)==true) throw new Error("EL NODO YA HA SIDO INGRESADO");
        var valor = await bootbox_prompt("ingrese valor del nodo referencial");
        if(valor==null) return;
        lista.insertar_antes_X(elemento,valor);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(elemento);
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function insertar_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        var elemento = await bootbox_prompt("ingrese valor del nodo");
        if(elemento==null) return;
        if(lista.buscar(elemento)==true) throw new Error("EL NODO YA HA SIDO INGRESADO");
        var valor = await bootbox_prompt("ingrese valor del nodo referencial");
        if(valor==null) return;
        lista.insertar_despues_X(elemento,valor);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(elemento);
    }catch(e){await bootbox_alert(e.message);}
}

////////////////////////////////////////////////////////////////////////////////
//                 ELIMINACION DE LISTAS SIMPLEMENTES LIGADAS                 //
////////////////////////////////////////////////////////////////////////////////
export async function eliminar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        lista.eliminar_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA");
        lista.eliminar_final();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        if(lista.isVacio()==true) throw new Error("LA LISTA ESTA VACIA")
        var elemento = await bootbox_prompt("ingrese valor del nodo");
        lista.eliminar_X(elemento);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        var valor = await bootbox_prompt("ingrese valor del nodo referencial");
        lista.eliminar_antes_X(valor);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////
export async function eliminar_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){lista=new Lista(canvas);}
    try{
        var valor = await bootbox_prompt("ingrese valor del nodo referencial");
        lista.eliminar_despues_X(valor);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){await bootbox_alert(e.message);}
}/////////////////////////////////////////////////////////