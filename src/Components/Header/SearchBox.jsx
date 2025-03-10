import { useContext, useState } from "react"
import search from "../../assets/search.svg"
import { getLocationByName } from "../../Data/location-data";
import { LocationContext } from "../../Contexts";
import useDebounce from "../../Hooks/useDebounce.jsx";

function SearchBox() {
	const{setSelectedLocation} = useContext(LocationContext);
	const [searchTerm, setSearchTerm] = useState("");


	// function handleSubmit(e){
	// 	e.preventDefault();
	// 	console.log(searchTerm);
	// 	const fetchedLocation = getLocationByName(searchTerm);
	// 	console.log(fetchedLocation)
	// 	setSelectedLocation(fetchedLocation)
	// }

	const doSearch=useDebounce((terms)=>{
			console.log(terms);
			const fetchedLocation = getLocationByName(terms);
			console.log(fetchedLocation)
			setSelectedLocation({...fetchedLocation})
		},500)
	

	const handleChange=(e)=>{
		const value = e.target.value;
		setSearchTerm(value);
		doSearch(value);
	}
  return (
    <form action="#">
					<div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
						<input 
						className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
							type="search" 
							placeholder="Search Location"
							onChange={handleChange} 
							required />
						<button type="submit">
							<img src={search}/>
						</button>
					</div>
				</form>
  )
}

export default SearchBox