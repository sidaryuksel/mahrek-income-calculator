export type person = {
	name: string;
	id: number,
	price: number,
	totalPrice: number
	parentId: String;
};

interface storeType {
	persons: person[];
}

export default storeType;

export type data = {
	id: string,
	name?: string,
	price?: number,
	totalPrice?: number,
	parentId?: string,
	prevPrice?:number
}