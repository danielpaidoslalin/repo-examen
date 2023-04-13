class Vehiculo{
    _numeroDeRuedas;
    _numeroDeLuces;
    _color;

    constructor(numeroDeRuedas,numeroDeLuces,color){
        this._numeroDeRuedas = numeroDeRuedas;
        this._numeroDeLuces  = numeroDeLuces;
        this._color          = color;
    }

    get numeroDeRuedas(){
        return this._numeroDeRuedas;
    }

    get numeroDeLuces(){
        return this._numeroDeLuces;
    }

    get color(){
        return this._color;
    }

    set numeroDeRuedas(nuevoNumeroDeRuedas){
        this._numeroDeRuedas = nuevoNumeroDeRuedas;
    }

    set numeroDeLuces(nuevoNumeroDeLuces){
        this._numeroDeLuces = nuevoNumeroDeLuces;
    }

    set color(nuevoColor){
        this._color = nuevoColor;
    }

    toString(){
        return `Numero de ruedas: ${this._numeroDeRuedas}\nNumero de luces: ${this._numeroDeLuces}\nColor: ${this._color}`;
    }
}