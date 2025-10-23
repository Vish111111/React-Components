import { useEffect, useState } from "react"

const Debounce = () => {

    const [Query, setQuery] = useState('')
    const [debounceQuery, setDebounceQuery] = useState([])


    useEffect(() => {

        const items = setTimeout(() => {

            setDebounceQuery(Query)


        }, 1000)

        return () => clearTimeout(items)

    }, [Query])



    useEffect(() => {

        if (debounceQuery) {
            console.log('debounceQuery :', debounceQuery)
        }

    }, [debounceQuery])


    return (
        <div>
            <h2 style={{color:'mediumorchid'}}>DEBOUNCE</h2>
            <input type="text" placeholder="Enter a Name" onChange={(e) => setQuery(e.target.value)} />
        </div>
    )

}
export default Debounce