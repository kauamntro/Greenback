import MainPanelSectionCard from "./MainPanelSectionCard"

const headerData = [
  {
    Title: 'Total Earning',
    Number: 120000,
    Percentage: 12,
    BgGreen: true,
  },
  {
    Title: 'Invoices',
    Number: 165000,
    Percentage: 2,
    BgGreen: false,
  },
  {
    Title: 'Total Spending',
    Number: 48670,
    Percentage: 6,
    BgGreen: false,
  },
  {
    Title: 'Balance',
    Number: 74330,
    Percentage: 2,
    BgGreen: false,
  },
];

export default function MainPanelSectionMain() {
  return (
    <div className="w-4/6 m-6">
        <section>
            <header>
                <ul className="flex flwx-row gap-5 justify-center">
                {headerData.map(data => (
                <MainPanelSectionCard
                    Title={data.Title}
                    Value={data.Number}
                    Percentage={data.Percentage}
                    BgGreen={data.BgGreen}
                    key={data.Title}
                />
                 ))}
                </ul>
            </header>
            <article>

            </article>
        </section>
        <aside>

        </aside>
    </div>
  )
}

