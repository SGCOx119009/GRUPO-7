export function bootbox_prompt(mensaje){
    return new Promise((resolve, reject) => {
        window.bootbox.prompt(mensaje, function(result){resolve(result);});
    });
}////////////////////////////////////////////////////////
export function bootbox_alert(mensaje){
    return new Promise((resolve, reject) => {
        window.bootbox.alert(mensaje, function(){resolve("");});
    });
}//////////////////////////////////////////////////////// 