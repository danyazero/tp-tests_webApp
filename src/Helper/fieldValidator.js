export const required = (value) => {
    if (value) return undefined;

    return "field required!!"
}

export const minLengthCreator = (textLength) => (value) => {
    if (value && value.length > textLength) return undefined;

    return `Min length is ${textLength} symbols`;
}

export const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined