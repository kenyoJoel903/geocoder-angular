export class Distrito {
    public id:number;
    public id_str:string;
    public name:string;
    public name_query:string;
    public ubigeo:string;
    public bbox:string;

    constructor(id:number, id_str:string, name:string, name_query:string, ubigeo:string, bbox:string){
        this.id = id;
        this.id_str = id_str;
        this.name = name;
        this.name_query = name_query;
        this.ubigeo = ubigeo;
        this.bbox = bbox;
    }
}