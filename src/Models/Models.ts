export type testsList = {
    id: number,
    author: string,
    name: string
}

export type testSettings = {
    id: number,
    buttons: string[],
    amount: number
}

export type resultArray = {
    name: string,
    points: number
}

export type testType = { type: number,
    question: string,
    buttons: Array<string>
}

export type loginData = {
    name: string,
    email: string
}