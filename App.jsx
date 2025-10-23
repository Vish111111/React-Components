import Counter from "./assets/counter"
import Redux from "./Redux"
import Transition from "./UseTransition"
import Toggle from "./UseToggle"
import CallBack from "./UseCallback"
import Memo from "./UseMemo"
import Reducer from "./UseReducer"
import Effect from "./UseEffect"
import Context from "./UseContext"
import Ref from "./UseRef"
import Controlled from "./Controlled"
import Uncontrolled from "./Uncontrolled"
import Hoc from "./Hoc"
import Debounce from "./Debounce"
import Pagination from "./Pagination"
import Todo from "./ToDo"
import Post from "./Post"
import { Api, Apis } from "./Api"
import Child from "./Child"
import User from "./Props"
import Color from "./Button"
import Sus from "./Suspense"
import Slider from "./ImageSlider"
import Synthetic from "./Symthetic"




function App() {

  function Data(data) {
    console.log(data)
  }

  const Country = 'India'

  return (

    <div>
      <h2 style={{ color: 'darkmagenta', textAlign: 'center' }}>REACT-COMPONENTS</h2><hr />
      <Slider/><hr/>
      <Counter /><hr />
      <Redux /><hr />
      <Transition /><hr />
      <Toggle /><hr />
      <CallBack /><hr />
      <Memo /><hr />
      <Reducer /><hr />
      <Effect /><hr />
      <Context /><hr />
      <Ref /><hr />
      <Controlled /><hr />
      <Uncontrolled /><hr />
      <Hoc /><hr />
      <Debounce /><hr />
      <Pagination/><hr />
      <Todo /><hr />
      <Post /><hr />
      <Api/>
      <Apis/><hr />
      <User Country={Country} /><hr />
      <Child get={Data} /><hr />
      <Color/><hr/>
      <Sus/><hr/>
      <Synthetic/><hr/>
    </div>

  )

}
export default App