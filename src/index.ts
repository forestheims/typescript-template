// exploring types, beginning with the basics

const nothing: null = null;

const unsure: undefined = undefined;

const num: 12 | 19 = 12;

const invalidNum: 12 | 19 = 13;

const nextValidNum: 12 | 19 = 19;

const boo: boolean = true;

const someSentence: string = "this is not that";

const specificSentence: "this exact string" = "this exact string";

const invalidSentence: "this exact string" = "this Exact string";

const numOrString: number | string = 3;

const nextNumOrString: number | string = "yup";