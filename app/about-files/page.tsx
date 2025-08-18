'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Download, Calendar, Folder } from "lucide-react"
import '@/styles/about-files.css'

export default function AboutFilesPage() {
  const [activeTab, setActiveTab] = useState('files')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // 分頁選項
  const tabs = [
    { id: 'files', label: '檔案專區' },
    { id: 'reports', label: '各區週報' },
    { id: 'groups', label: '各區小組資料' },
    { id: 'baptism', label: '洗禮花絮下載' }
  ]

  // 檔案專區資料
  const filesData = [
    {
      id: 1,
      title: "主日信息講道PPT檔",
      postDate: "114-08-01",
      category: "超連結",
      files: ["pdf", "zip"],
      link: "https://drive.google.com/drive/u/7/folders/1HwDeJpo5QYnXqow2o9cb1VHEpxQkIVcT"
    },
    {
      id: 2,
      title: "主日崇拜週報",
      postDate: "114-08-01",
      category: "超連結",
      files: ["pdf", "zip"],
      link: "https://drive.google.com/drive/u/1/folders/1t8h37AhnVgz4ABBHNZUm6mB3lizdSsso"
    },
    {
      id: 3,
      title: "線上代禱卡",
      postDate: "114-08-01",
      category: "超連結",
      files: ["pdf", "zip"],
      link: "https://docs.google.com/forms/d/e/1FAIpQLScmUBFew04zz4j-WqqviWC-rWa8rqDh_PAuNRo94983ZXJtnA/viewform"
    }
  ]

  // 各區週報資料
  const reportsData = [
    {
      id: 1,
      title: "學生牧區週報",
      postDate: "114-08-01",
      category: "超連結",
      files: ["pdf", "zip"],
      link: "https://drive.google.com/drive/u/1/folders/1iwTHH1KCNwwNkCE9x79aobVgiG6wt20e"
    },
    {
      id: 2,
      title: "兒童牧區週報",
      postDate: "114-08-01",
      category: "超連結",
      files: ["pdf", "zip"],
      link: "https://drive.google.com/drive/u/1/folders/1J_WJUIs7-azx4BCVFFN8u8RcbcLnb5r4"
    }
  ]

  // 各區小組資料
  const groupsData = [
    {
      id: 1,
      title: "小組週報表",
      postDate: "114-08-01",
      category: "電子檔",
      files: ["doc", "pdf"],
      link: undefined
    }
  ]

  // 洗禮花絮下載
  const baptismImages = [
    'IMG_8010-1024x683.jpg',
    'IMG_7902-1024x683.jpg',
    'IMG_7887-1024x683.jpg',
    'IMG_7888-1024x683.jpg',
    'IMG_8083-1024x683.jpg',
    'IMG_8088-1024x683.jpg',
    'IMG_8090-1024x683.jpg',
    'IMG_8112-1024x683.jpg',
    'IMG_8122-1024x683.jpg',
    'IMG_8140-1024x683.jpg',
    'IMG_8146-1024x683.jpg',
    'IMG_8162-1024x683.jpg',
    'IMG_8176-1024x683.jpg',
    'IMG_8179-1024x683.jpg',
    'IMG_8188-1024x683.jpg',
    'IMG_8198-1024x683.jpg',
    'IMG_8211-1024x683.jpg',
    'IMG_8223-1024x683.jpg',
    'IMG_8230-1024x683.jpg',
    'IMG_8234-1024x683.jpg',
    'IMG_8241-1024x683.jpg',
    'IMG_8249-1024x683.jpg',
    'IMG_8299-1024x683.jpg',
    'IMG_8361-1024x683.jpg',
    'IMG_8367-1024x683.jpg',
    'IMG_8373-1024x683.jpg',
    'IMG_8378-1024x683.jpg',
    'IMG_8389-1024x683.jpg',
    'IMG_8396-1024x683.jpg',
    'IMG_8404-1024x683.jpg',
    'IMG_8410-1024x683.jpg',
    'IMG_8419-1024x683.jpg',
    '教會架構調整.jpg'
  ]

  const baptismData = [
    {
      id: 1,
      title: "洗禮花絮照片集",
      postDate: "114-08-01",
      category: "照片集",
      files: ["gallery"],
      link: undefined
    }
  ]

  // 根據當前標籤頁選擇對應的資料
  const getCurrentData = () => {
    switch (activeTab) {
      case 'files':
        return filesData
      case 'reports':
        return reportsData
      case 'groups':
        return groupsData
      case 'baptism':
        return baptismData
      default:
        return filesData
    }
  }

  const currentData = getCurrentData()

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
          

                    {/* Files Table or Gallery */}
          {activeTab === 'baptism' ? (
            // 洗禮花絮圖片畫廊
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">洗禮花絮照片集</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {baptismImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={`/about/about-files-baptist/${image}`}
                        alt={`洗禮花絮照片 ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // 其他標籤頁的表格
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
                    {currentData.map((file, index) => (
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
                            {file.files.includes('doc') && (
                              <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
                                <FileText className="w-3 h-3 mr-1" />
                                doc下載
                              </button>
                            )}
                            {file.files.includes('pdf') && (
                              <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-600 bg-red-100 hover:bg-red-200 transition-colors duration-200">
                                <FileText className="w-3 h-3 mr-1" />
                                PDF下載
                              </button>
                            )}
                            {file.files.includes('zip') && (
                              <a 
                                href={file.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
                              >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                link
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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

      {/* 圖片查看器模態框 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={`/about/about-files-baptist/${selectedImage}`}
              alt="洗禮花絮照片"
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-4">
              <a
                href={`/about/about-files-baptist/${selectedImage}`}
                download
                className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下載圖片
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
