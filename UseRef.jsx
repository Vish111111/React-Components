import { useRef, useState } from "react"

const Ref = () => {

    const [data, setData] = useState(0)

    const TimerRef = useRef(null)

    const Start = () => {

        TimerRef.current = setInterval(() => {

            setData(p => p + 1)

        }, 500)
    }


    const Stop = () => {

        clearInterval(TimerRef.current)
        TimerRef.current = null

    }

    const Reset = () => {

        stop()
        setData(0)

    }

    return (
        <div>
            <h2 style={{ color: 'blueviolet' }}>USE-REF HOOK</h2>
            <h2>Count:{data}</h2>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )

}
export default Ref