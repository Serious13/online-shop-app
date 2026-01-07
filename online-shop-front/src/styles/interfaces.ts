export interface Product {
    id: number;
    name: string;
    version: string;
    shortDescription: string;
    longDescription: string;
    inStock: boolean;
}

export interface topProduct {
    id: string | number;
    name : string;
    score : number;
}