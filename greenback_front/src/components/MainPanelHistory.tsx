import { CaretRight } from "@phosphor-icons/react";

const dataList = [
    { amount: 300, category: "Expense", date: "2 days later" },
    { amount: 450, category: "Received", date: "4 days later" },
    { amount: 500, category: "Received", date: "1 month later" },
    { amount: 700, category: "Expense", date: "3 month later" },
];

export default function MainPanelHistory () {
    return (
        <section className="w-full p-4">
            <h1 className="block font-bold text-xl mb-4">Activity Summary</h1>
            <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <header className="m-0 flex flex-row justify-between items-start ">
                    <div className="flex gap-4">
                        <button className="border-b border-gray-600 pb-4 hover:border-b-green-500 hover:text-green-500 transition-colors">History</button>
                        <button className="border-b border-gray-600 pb-4 hover:border-b-green-500 hover:text-green-500 transition-colors">Upcoming</button>
                    </div>
                    <div>
                        <button className="flex items-center border-b border-gray-600 pb-4 hover:border-b-green-500 hover:text-green-500 transition-colors">
                            View More <CaretRight />
                        </button>
                    </div>
                </header>
                <ul className="flex flex-col gap-1">
                    {dataList.map(data => {
                        return (
                            <li className="flex py-3 justify-between text-xl border-b border-gray-700">
                            <h2 className={`text-base ${data.category === "Expense" ? 'text-red-500' : 'text-green-400'}`}>$ {data.category === "Expense" ? data.amount : -data.amount} </h2>
                            <div className="flex gap-6 dark:text-gray-400 text-base">
                                <span> {data.category} </span>
                                <span> {data.date} </span>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}