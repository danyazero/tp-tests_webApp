import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.0.229:9005/api/",
    withCredentials: true,
})

export function getQuestionReq(type: number, curQuest: number){
    return instance.get(`test?type=${type}&id=${curQuest}`)
}

export function sendResultReq(answers: Array<number>, type: number, name: string, email: string){
    return instance.post('/test', {answers, type, name, email})
}

export function getTestsListReq(){
    return instance.get('/test')
}

export function getDataAboutTestReq(id: number){
    return instance.get(`/test?type=${id}`)
}