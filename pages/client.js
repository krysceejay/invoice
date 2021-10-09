import {useEffect, useContext, useState} from 'react'
import {DataContext} from '../store/globalState'
import Layout from '../components/layouts/Layout'
import {
  GET_CLIENTS
} from '../store/types/clientTypes'

const Client = () => {

  const data = [
    {"name": "Aaron Stawart", "com": "IBM"},
    {"name": "Airey Stawart", "com": "IBM"},
    {"name": "Alpha Stawart", "com": "IBM"},
    {"name": "Aaron Stawart", "com": "IBM"},
    {"name": "Bonna Stawart", "com": "IBM"},
    {"name": "Cam Stawart", "com": "IBM"},
    {"name": "Gold Stawart", "com": "IBM"},
    {"name": "Holding Stawart", "com": "IBM"},
    {"name": "Hastings Stawart", "com": "IBM"},
    {"name": "Silver Stawart", "com": "IBM"},
    {"name": "Wild Stawart", "com": "IBM"},
    {"name": "Xylon Stawart", "com": "IBM"},
    {"name": "Zoe Stawart", "com": "IBM"},
  ]
  
  const sortedd = Object.values(data.reduce((r, e) => {
    let group = e.name[0]
    if(!r[group]) r[group] = {group, children: [e]}
    else r[group].children.push(e)
    return r
  }, []))

  const {state, dispatch} = useContext(DataContext)
  const {sortedClients} = state

  useEffect(() => {
    dispatch({
      type: GET_CLIENTS,
      payload: sortedd
    })
  }, [])

  return (
    <Layout title="home">
      <div className="px-4 md:px-8">
        <button className="bg-gray-900 h-12 w-12 flex justify-center items-center rounded-md text-white fixed z-40 right-4 bottom-28">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <div className="sticky top-0 bg-gray-100 py-4">
          <h1 className="font-bold text-2xl">Clients</h1>
          <div className="flex items-center mt-4">
              <input className="bg-white appearance-none rounded-l w-full p-3 h-12 leading-tight focus:outline-none text-sm" 
              type="text"
              name="search"
              placeholder="Search"
              />
              <button className="bg-white h-12 w-12 flex justify-center items-center rounded-r text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </button>
          </div>
          <div className="text-sm mt-4 font-normal">24 Client Records Found</div>
        </div>
        <div className="flex mt-6">
          <div className="flex-1 pb-24">
            {sortedClients?.map((it, ind) => (
              <div key={ind}>
              {it.children.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 py-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  <div>
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <div className="text-xs font-normal text-gray-400">{item.com}</div>
                  </div>
                </div>
              ))}
              </div>
            ))}
            
          </div>
          {/* <div className="w-10 h-screen bg-red-600 text-center text-base font-normal text-gray-500">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
            </ul>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default Client
