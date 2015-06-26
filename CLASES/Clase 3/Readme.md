#Clase 3
##CSS

**caniuse.com =>**permite ver que browser soportan las funciones css que aplicás.

###Box sizing 
**box-sizing: border-box;** ---- hace que el ancho de la caja sea *el ancho total* es decir que calcula sólo *width-padding-border.*

###Position

**position: relative;** ---- permite desfazar el posicionamiento default del objeto.

**top-bottom-left-right: 20px;** ---- permite especificar la medida que se debe desplazar.

**position: fixed;** ---- se utiliza para que el menu quede siempre visible por más que se haga scroll (toma como referencia el browser).

> En el CSS
> 
> *.position-fixed {*
> 
    height: 60px; 
	position: fixed;
	top: 0;
*}*

**Float** ---- permite flotar divs, debemod utilizar *clear*

**clearfix** ---- es para generar un clear both a todo el div, se coloca la clase en el padre.
> .clearfix{
>
	overflow: auto;
	zoom: 1;
}

**display: inline-block** ---- posiciona los elementos en bloque, uno al lado de otro (generalmente en los nav para generar los menu)

###*Centrado vertical*
**.class:before-after** permite colocar un objeto antes o después del primer o último hijo del HTML

> .class:before {
>
	coontent:"";
	height: 100%;
}


**flexbox**
> .flexbox-ex {
> 
	display: -webkit-flex;
	display: flex;
	-webkit-aling-items: center;
	aling-items: center;

}