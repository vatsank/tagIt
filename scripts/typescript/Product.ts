class Product{

    private productId:number;
    private productName:string;
    private ratePerUnit:number;

    constructor(productId:number,productName:string,ratePerUnit:number)
    {
        this.productId = productId;
        this.productName = productName;
        this.ratePerUnit = ratePerUnit;
    }

    toString(){

        return `${this.productId} with name ${this.productName} has a discount
         of ${this.ratePerUnit *.10}`;
    }
}

var tv = new Product(101,"sony Tv",45000);

console.log(tv.toString());
