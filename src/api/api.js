import axiosInstance from './index'

const axios = axiosInstance

export const getTag = (backName, badge1Value, badge2Value, badge3Value, adjectiveValue, subjectiveValue) => {
    return axios.get('http://localhost:8000/api/books/', {
        backName: backName,
        badge1Value: badge1Value,
        badge2Value: badge2Value,
        badge3Value: badge3Value,
        adjectiveValue: adjectiveValue,
        subjectiveValue: subjectiveValue})}
