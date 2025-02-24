import { useEffect, useState } from "react"
import QwestApi from "../../entities/Qwest/QwestApi"

export default function QwestPage() {
const [qwests, setQwests] = useState([])


useEffect(() => {
	QwestApi.getQwests().then(setQwests)
}, [])

	return (<div>{qwests.map((el) => el.title)}</div>)
}
