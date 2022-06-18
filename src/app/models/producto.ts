export class Producto {
  public id: string;
  public description: string;
  public source: string;
  public image: string;
  public url: string;
  public category: string;
  public subcategory: string;
  public type: string;
  public outOfStock: boolean;

  constructor(
    id: string,
    description: string,
    source: string,
    image: string,
    url: string,
    category: string,
    subcategory: string,
    type: string,
    outOfStock: boolean
  ) {
    this.id = id;
    this.description = description;
    this.source = source;
    this.image = image;
    this.url = url;
    this.category = category;
    this.subcategory = subcategory;
    this.type = type;
    this.outOfStock = outOfStock;
  }
}
