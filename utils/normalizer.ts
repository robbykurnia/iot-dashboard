export interface History {
    _id: Id
    latitude: number
    longitude: number
    speed: number
    imei: string
}
  
export interface Id {
    $oid: string
}
  

interface Deps {
    history: History[]
}

interface Result {
    history: HistoryData[]
}

interface HistoryData {
    _id: Id
    lat: number
    lng: number
    speed: number
    imei: string
}

const normalizer = (deps: Deps) => {
    const { history } = deps;
    const result: Result = {
        history: []
    }

    result.history = history.map(({ _id, imei, latitude, longitude, speed}) => ({ _id, imei, lat: latitude, lng: longitude, speed, color: '#1bff82'}))

    return result
}

export default normalizer;