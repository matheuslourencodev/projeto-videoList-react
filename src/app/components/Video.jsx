'use client'

export default function Video({ title, subtitle, image, isFavorite, onToggleFavorite}) {
    return (
        <div className="flex items-stretch gap-4 hover:bg-slate-200 p-4 transition-all rounded">
            <div className="flex items-center justify-center w-52 h-28 rounded text-4xl cursor-pointer" style={{ backgroundImage: `url(${image})` }}>
               
            </div>
            <div className="flex-1">
                <h3 className="font-bold">{ title }</h3>
                <p>{ subtitle }</p>
            </div>
            <div className="text-3xl flex items-center cursor-pointer select-none" onClick={onToggleFavorite}>
                {isFavorite ? '🧡' : '🖤'}
            </div>
        </div>
    )
}