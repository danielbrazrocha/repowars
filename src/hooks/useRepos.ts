import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { githubClient } from "../api"

const randomSince = Math.floor(Math.random() * 1000000)

const fetchRepos = async (amount: number, setters: Dispatch<SetStateAction<any[]>>[]) => {
  const res = await githubClient.request("GET /search/repositories", {
    q: `is:public stars:>1000 fork:false`,
    sort: "stars",
    order: "desc",
    per_page: amount,
    since: randomSince,
    page: 1,
  })
  setters.forEach( (setter) => setter(res.data.items))
}

const useRepos = (amount: number) => {
    //criar estado para todos os repositorios retornados
    const [allRepos, setAllRepos] = useState<any>([])
    //criar um estado para os repos para serem manipulados
    const [repositories, setRepositories] = useState<any>([])
    //um useEffect para recuperar os repositorios do GitHub quando chamado o hook
    useEffect(() => {
      fetchRepos(amount, [setAllRepos,setRepositories])    
    }, [])    

    //retornar [repositories, setRepositories, allRepositories]
    return [repositories, setRepositories, allRepos]

}

export default useRepos

