const ArtistCard = () => {
    return (
        <div className="flex items-center jusfity-center flex-col w-24">
            <img className="border-2 border-orange bg-black p-1 rounded-full w-16 h-16 object-cover mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvoI3_Ckg4R6pg63rTMFsDZSQhQ0KS-j_uh4ZcCAx6w&s" alt="Image Artist" />
            <h3 className="font-bold text-sm text-center">Way Back Home</h3>
            <span className="text-grey text-xs font-normal">Ed Sheeran</span>
        </div>
    )
}

export default ArtistCard;