import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:9005/api"
    baseURL: "https://zeropsychologicaltest.netlify.app/.netlify/functions/app/api/",
})

export function getQuestionReq(type: number, curQuest: number){
    return instance.get(`question?type=${type}&id=${curQuest}`)
}

export function sendResultReq(answers: Array<number>, type: number, name: string, email: string){
    return instance.post('/test', {answers, type, name, email})
}

export function getTestsListReq(){
    return instance.get('/test')
}