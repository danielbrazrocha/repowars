import { Dispatch, SetStateAction, useEffect, useState } from "react"

const fetchRepos = async (amount: number, setters: Dispatch<SetStateAction<any[]>>[]) => {
    console.log('first')
    const res = { data: ['repo1', 'repo2']}  //mocked data
    setters.forEach( (setter) => setter(res.data))
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

