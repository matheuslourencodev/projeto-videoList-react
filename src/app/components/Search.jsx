export default function Search({setSearch}) {
    return (
        <div className="my-4">
            <div className="bg-slate-200 rounded flex items-center">
                <span className="p-2">🔎</span>
                <input 
                    type="text" 
                    placeholder="pesquisar..." 
                    className="bg-transparent w-full p-3 text-slate-950 outline-none" 
                    onChange={(e) => setSearch(e.target.value.trim())}
                />
            </div>
        </div>
    )
}