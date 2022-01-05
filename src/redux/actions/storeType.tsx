export type person = {
	name: string;
	attributes:{
		id: number,
		price: number,
		totalPrice: number
	}
	children?: Array<{}>;
};

interface storeType {
	persons: person[];
}

export default storeType;