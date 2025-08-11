'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Download, Calendar, Folder } from "lucide-react"
import '@/styles/about-files.css'

export default function AboutFilesPage() {
  const [activeTab, setActiveTab] = useState('files')
  const [currentPage, setCurrentPage] = useState(1)

  // 分頁選項
  const tabs = [
    { id: 'files', label: '檔案專區' },
    { id: 'reports', label: '各區週報' },
    { id: 'groups', label: '各區小組資料' },
    { id: 'baptism', label: '洗禮花絮下載' }
  ]

  // 模擬檔案資料
  const files = [
    {
      id: 1,
      title: "文書及檔案管理電腦化作業規範(109年12月修正)之DTD及標籤集比較表",
      postDate: "111-08-01",
      category: "資訊化",
      files: ["pdf", "zip"]
    },
    {
      id: 2,
      title: "文書及檔案管理電腦化作業規範(109年12月修正)之DTD及標籤集比較表",
      postDate: "111-08-01",
      category: "資訊化",
      files: ["pdf"]
    },
    {
      id: 3,
      title: "文書及檔案管理電腦化作業規範(109年12月修正)之DTD及標籤集比較表",
      postDate: "111-08-01",
      category: "資訊化",
      files: ["pdf", "zip"]
    },
    {
      id: 4,
      title: "文書及檔案管理電腦化作業規範(109年12月修正)之DTD及標籤集比較表",
      postDate: "111-08-01",
      category: "資訊化",
      files: ["pdf"]
    },
    {
      id: 5,
      title: "文書及檔案管理電腦化作業規範(109年12月修正)之DTD及標籤集比較表",
      postDate: "111-08-01",
      category: "資訊化",
      files: ["pdf", "zip"]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about/about-files-hands.jpg')] bg-cover bg-center"></div>
      </section>

      {/* Main Content */}
      <div className="border-b border-gray-200">
        <nav className="flex justify-center space-x-8 px-6 py-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

      <section className="py-20 bg-[#F3A149]">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          

          {/* Files Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#07847f]">
                  <tr>
                    <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                      標題
                    </th>
                    <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                      張貼日
                    </th>
                    <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                      資料大類
                    </th>
                    <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                      檔案
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {files.map((file, index) => (
                    <tr 
                      key={file.id} 
                      className={`hover:bg-gray-50 transition-colors duration-200 ${
                        index === 2 ? 'bg-gray-50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 max-w-md truncate">
                          {file.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {file.postDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Folder className="w-4 h-4 mr-2" />
                          {file.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          {file.files.includes('pdf') && (
                            <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-600 bg-red-100 hover:bg-red-200 transition-colors duration-200">
                              <FileText className="w-3 h-3 mr-1" />
                              PDF
                            </button>
                          )}
                          {file.files.includes('zip') && (
                            <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
                              <Download className="w-3 h-3 mr-1" />
                              ZIP
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="px-3 py-2 text-sm text-white hover:text-[#21807a] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
              >
                上一頁
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded ${
                    currentPage === page
                      ? 'bg-[#21807a] text-white'
                      : 'text-white hover:text-[#21807a]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                className="px-3 py-2 text-sm text-white hover:text-[#21807a] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 5}
              >
                下一頁
              </button>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
