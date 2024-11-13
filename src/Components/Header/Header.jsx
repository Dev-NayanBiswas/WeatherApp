import { useState } from "react"
import Favourite from "./Favourite"
import Logo from "./Logo"
import Modal from "./Modal"
import SearchBox from "./SearchBox"

function Header(){
	const [showModal, setShowModal] = useState(false)
  return (
    
        <header className="w-10/12 mx-auto">
		<nav className="container flex items-center justify-between py-6">
			<Logo/>

			<div className="flex items-center gap-4 relative">
				<SearchBox/>
				<Favourite onShow = {()=>setShowModal(!showModal)}/>
                    {/*Modal*/}
				{showModal && <Modal/>}

			</div>
		</nav>
	</header>
    
  )
}

export default Header