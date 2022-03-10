export type DataType = {
	interval: string;
	paymentCount: number;
};

export type FormatedDataType = { [key: string]: number[] } | null;

export type FrequencyType = 'weekly' | 'fortnightly' | 'monthly';

export type RemainingButtonType = {
	remaining: number;
	month: number;
	amount: number;
};
