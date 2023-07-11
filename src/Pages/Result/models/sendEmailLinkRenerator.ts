import {IResultItem, IAboutTest} from "../../../Models/Models";

export function sendEmailLinkGenerator(type: number, name: string, test: IAboutTest[], result: IResultItem[]) {
    const enter = "%0D%0A";
    let resultString = ""
    const testType = test.filter(m => m.id !== type)[0]
    for (let i = 0; i < result.length; i++) {
        resultString += ("%20-%20" + result[i].name + "%20" + result[i].points + enter);
    }

    return "mailto:olena.marshak@nuos.edu.ua?subject=Psychological%20test&body=" + "Name: " + name + enter + "Test: " + testType.name + enter + "Author: " + testType.author + enter + "Results: " + enter + resultString
}