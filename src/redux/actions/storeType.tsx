export type person = {
	id: string;
	title: string;
	isCompleted: boolean;
};

interface storeType {
	persons: person[];
}

export default storeType;