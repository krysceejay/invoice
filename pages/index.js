import Layout from '../components/Layout'

const Home = () => {

  const data = [
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
    {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "0000000000"},
  ]

  return (
    <Layout title="home">
      <div>
        <button className="bg-gray-900 h-12 w-12 flex justify-center items-center rounded-md text-white fixed z-40 right-4 bottom-28">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <div className="py-8">
          <div className="flex items-center space-x-3 px-4 md:px-8">
            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
            <div>
              <h3 className="text-base font-medium">Hello Chris,</h3>
              <div className="text-xs font-normal text-gray-500">Hope it's been a great day so far</div>
            </div>
          </div>
          <div className="bg-black p-4 rounded-md mt-4 mx-4 md:mx-8">
            <h4 className="text-gray-200 text-base border-b border-gray-200 pb-1">
              Current Balance
            </h4>
            <div className="text-white flex items-baseline space-x-2 mt-8">
              <span className="text-sm">NGN</span>
              <span>450,000.00</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 md:px-8">
              <h3 className="text-lg font-bold">Unpaid Invoices</h3>
              <button className="text-sm text-gray-500">View All</button>
            </div>
            <section id="carousel">
              <div className="carousel-wrp pl-4 md:pl-8">
                <div className="bg-white rounded-md mr-4 min-w-64 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div>
                      <h3 className="text-base font-medium">Terrance LLC</h3>
                      <div className="text-sm font-normal text-gray-500">Due 13 Jul 2021</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-md mr-4 min-w-64 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div>
                      <h3 className="text-base font-medium">Terrance LLC</h3>
                      <div className="text-sm font-normal text-gray-500">Due 13 Jul 2021</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-md mr-4 min-w-64 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div>
                      <h3 className="text-base font-medium">Terrance LLC</h3>
                      <div className="text-sm font-normal text-gray-500">Due 13 Jul 2021</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-md mr-4 min-w-64 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div>
                      <h3 className="text-base font-medium">Terrance LLC</h3>
                      <div className="text-sm font-normal text-gray-500">Due 13 Jul 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="px-4 md:px-8 pt-8 bg-white rounded-t-2xl">
          <h3 className="text-lg font-bold mb-3">History</h3>
          <span className="text-base">Today, 20 Jul</span>
          <div className="pb-24">
              {data.map((item, index) => (
                <div key={index} className={`flex items-center justify-between ${index !== 0 && "border-t border-gray-200"}`}>
                  <div className="flex items-center space-x-3 py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div>
                      <h3 className="text-base font-semibold">{item.name}</h3>
                      <div className="text-xs font-normal text-gray-400">{item.reason}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-base font-semibold">{item.amount}</h3>
                    <div className="text-xs font-normal text-gray-400">{item.code}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
