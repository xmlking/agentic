import { z } from "zod";
import { generateObject } from "ai";
// import { smallOpenAiModel as model } from "../shared/models.ts";
// import { ollamaLlama2Model as model } from "../shared/models.ts";
// import { miniAzureModel as model } from "../shared/models.ts";
import {ollamaPhi4Model as model } from "../shared/models.ts";

const schema = z.object({
	name: z.string().describe("The name of the user"),
	age: z.number().describe("The user's age"),
	email: z.string().email().describe("The user's email address, @example.com"),
});

export const createFakeUsers = async (input: string) => {
	const { object } = await generateObject({
		model,
		prompt: input,
		system: `You are generating fake user data.`,
		output: "array",
		schema,
	});

	return object;
};

const fakeUsers = await createFakeUsers("Generate 5 fake users from the UK.");

console.dir(fakeUsers, { depth: null });
