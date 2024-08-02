export default function Header({title, subtitle}) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{ title }</h1>
            <h2 className="text-xl">{ subtitle }</h2>
        </div>
    )
}