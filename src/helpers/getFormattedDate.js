

export const getFormattedDate = ( timestamp ) => {

    const date = new Date(timestamp);
    
    const dia     = date.getDate();
    const mes     = date.getMonth() + 1; // Se suma 1 ya que los meses en JavaScript se indexan desde 0 (enero es 0)
    const anio    = date.getFullYear();
    const hora    = date.getHours();
    const minutos = date.getMinutes();  

    const formattedDate = `${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${anio} ${hora.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
    return formattedDate;
}

