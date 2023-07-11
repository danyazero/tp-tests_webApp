export interface IAboutTest {
    id: number,
    author: string,
    name: string,
    amount: number
}

export interface IResultItem {
    name: string,
    points: number,
}

export interface IResult {
    results: IResultItem[],
    caption: string
}

export interface ITest {
    type: number,
    question: string,
    buttons: Array<string>
}

export interface CardProps{
    name: string,
    author: string,
    id: number,
    amount : number
    setTest(id: number, amount: number): void
}