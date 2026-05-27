export default function DashboardPage() {
    const stats = [
        {
            title: "Applications",
            value: 24,
        },
        {
            title: "Interviews",
            value: 6,
        },
        {
            title: "Offers",
            value: 2,
        },
    ];
    return (
        <main className="min-h-screen bg-black text-white flex">

            <aside className="w-64 border-r border-white/10 p-6">

                <h1 className="text-2xl font-bold mb-10">
                    JobTrack AI
                </h1>

                <nav className="space-y-4">

                    <button className="block text-left w-full px-4 py-3 rounded-xl bg-white text-black font-medium">
                        Dashboard
                    </button>

                    <button className="block text-left w-full px-4 py-3 rounded-xl hover:bg-white/10 transition">
                        Applications
                    </button>

                    <button className="block text-left w-full px-4 py-3 rounded-xl hover:bg-white/10 transition">
                        Interviews
                    </button>

                    <button className="block text-left w-full px-4 py-3 rounded-xl hover:bg-white/10 transition">
                        Resume Builder
                    </button>

                </nav>

            </aside>

            <section className="flex-1 p-10">

                <h2 className="text-4xl font-bold mb-4">
                    Dashboard Overview
                </h2>

                <p className="text-gray-400 mb-10">
                    Welcome back. Track your applications and monitor progress.
                </p>

                <div className="grid grid-cols-3 gap-6">

                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.title}
                                className="bg-zinc-900 border border-white/10 rounded-3xl p-6"
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {stat.title}
                                </h3>

                                <p className="text-4xl font-bold">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>



                </div>

            </section >

        </main >
    );
}