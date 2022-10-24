import Song from "../Song";

const RecentlyPlayed = () => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold">Recently Played</h2>
            </div>

            <div className="flex flex-col gap-8">
                <Song />
                <Song />
                <Song />
                <Song />
            </div>
        </>
    )
}

export default RecentlyPlayed;