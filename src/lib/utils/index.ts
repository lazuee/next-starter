import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classnames: ClassValue[]): string => {
	return twMerge(clsx(classnames));
};

export const formatError = (error: unknown): { message: string; name?: string } => {
	try {
		if (error instanceof Error) {
			return { message: error.message, name: error.name };
		}
		return { message: String(error) };
	} catch (error) {
		return { message: "An unknown error ocurred." };
	}
};
