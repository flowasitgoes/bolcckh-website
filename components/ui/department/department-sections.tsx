export function DepartmentSections() {
  const departments = [
    {
      id: 'admin',
      name: '行政部門',
      leftImage: '/department/02-left-row-2-admin-bgImage-1:3-width.png',
      rightImage: '/department/03-row-2-right-admin-desicription-bgImage-2:3-width.png',
      layout: 'left-image-right-text'
    },
    {
      id: 'praise',
      name: '敬拜部門', 
      rightImage: '/department/04-row-3-right-praise-bgImage-1:3-width.png',
      layout: 'right-image-left-text'
    },
    {
      id: 'care',
      name: '關懷部門',
      leftImage: '/department/05-row-4-left-care-bgImage-1:3-width.png',
      rightImage: '/department/05-row-4-right-care--description-bgImage-2:3-width.png',
      layout: 'left-image-right-text'
    },
    {
      id: 'gospel',
      name: '福音外展部',
      rightImage: '/department/06-row-4-right-care--bgImage-1:3-width.png',
      layout: 'right-image-left-text',
      description: '負責傳揚福音，透過各類活動，將福音信息傳遞給未信者，引領他們認識耶穌。'
    },
    {
      id: 'youth',
      name: '青少年部門',
      leftImage: '/department/07-row-5-left-youth-bgImage-1:3-width.png',
      rightImage: '/department/07-row-5-right-youth-description-bgImage-2:3-width.png',
      layout: 'left-image-right-text'
    },
    {
      id: 'social',
      name: '社會關懷',
      rightImage: '/department/08-row-6-social-right-bgImage-1:3-width.png',
      layout: 'right-image-left-text'
    },
    {
      id: 'ministry7',
      name: '教牧同工',
      leftImage: '/department/09-row-7-left-1:3-width-bgImage.png',
      rightImage: '/department/10-row-7-right-description-2:3-width-bgImage.png',
      layout: 'left-image-right-text'
    },
    {
      id: 'ministry8',
      name: '媒體影音',
      rightImage: '/department/10-row-8-right-1:3-width-bgImage.png',
      layout: 'right-image-left-text'
    },
    {
      id: 'ministry9',
      name: '禱告事工',
      leftImage: '/department/11-row-9-left-1:3-width-bgImage.png',
      rightImage: '/department/12-row-9-right-description-2:3-width-bgImage.png',
      layout: 'left-image-right-text'
    }
  ]

  return (
    <section className="department-sections">
      {departments.map((dept) => (
        <div key={dept.id} className="department-row">
          {dept.layout === 'left-image-right-text' ? (
            <div className="department-layout">
              {/* Left Image (1/3 width) */}
              <div className="department-image-left relative">
                <img
                  src={dept.leftImage}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
                {/* 行政部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'admin' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        行政部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 牧養關懷部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'care' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        牧養關懷部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 兒童青少年事工部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'youth' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        兒童青少年事工部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 媒體事工部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'ministry7' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        媒體事工部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 總務部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'ministry9' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        總務部
                      </h2>
                    </div>
                  </div>
                )}
              </div>
              {/* Right Text/Content (2/3 width) */}
              <div className="department-content-right relative">
                <img
                  src={dept.rightImage}
                  alt={`${dept.name}介紹`}
                  className="w-full h-full object-cover"
                />
                {/* 行政部描述文字叠加 */}
                {dept.id === 'admin' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white text-center max-w-md">
                      <p className="text-lg md:text-xl leading-relaxed department-description-line-height">
                        負責教會的整體行政事務，包括文件處理、活動協調、政策制定等，確保教會的日常運作順暢。
                      </p>
                    </div>
                  </div>
                )}
                {/* 關懷部門描述文字叠加 */}
                {dept.id === 'care' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white text-center max-w-md">
                      <p className="text-lg md:text-xl leading-relaxed department-description-line-height">
                        負責信徒的牧養和關懷，提供屬靈指導、輔導、探訪等服務，幫助信徒在信仰上成長。
                      </p>
                    </div>
                  </div>
                )}
                {/* 兒童青少年事工部描述文字叠加 */}
                {dept.id === 'youth' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white text-center max-w-md">
                      <p className="text-lg md:text-xl leading-relaxed department-description-line-height">
                        針對兒童和青少年，提供相關的信仰教育和活動，培養他們的信仰生活。
                      </p>
                    </div>
                  </div>
                )}
                {/* 媒體事工部描述文字叠加 */}
                {dept.id === 'ministry7' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white text-center max-w-md">
                      <p className="text-lg md:text-xl leading-relaxed department-description-line-height">
                        利用媒體平台，如網站、社群媒體等，傳播教會信息，與外界保持聯繫。
                      </p>
                    </div>
                  </div>
                )}
                {/* 總務部描述文字叠加 */}
                {dept.id === 'ministry9' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-white text-center max-w-md">
                      <p className="text-lg md:text-xl leading-relaxed department-description-line-height">
                        負責教會的硬體設施、設備維護、場地管理等事務。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="department-layout">
              {/* Left Text/Content (2/3 width) */}
              <div className="department-content-left">
                <div className="bg-[#21807a] text-white h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-lg md:text-xl leading-relaxed max-w-md department-description-line-height">
                      {dept.id === 'praise' && '帶領信徒進行敬拜讚美，透過音樂、詩歌等方式，表達對上帝的敬拜和感謝，營造屬靈氛圍。'}
                      {dept.id === 'gospel' && '負責傳揚福音，透過各類活動，將福音信息傳遞給未信者，引領他們認識耶穌。'}
                      {dept.id === 'social' && '關懷社會上的弱勢群體，提供救助、關懷、輔導等服務，彰顯上帝的愛和關懷。'}
                      {dept.id === 'ministry8' && '負責教會的媒體製作與技術支援，包括影音設備操作、直播服務、宣傳設計等工作。'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image (1/3 width) */}
              <div className="department-image-right relative">
                <img
                  src={dept.rightImage}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
                {/* 敬拜讚美部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'praise' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        敬拜讚美部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 福音外展部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'gospel' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        福音外展部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 社福事工部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'social' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        社福事工部
                      </h2>
                    </div>
                  </div>
                )}
                {/* 財務部特殊样式：图片中间显示部门名称 */}
                {dept.id === 'ministry8' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white px-8 py-4 rounded-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-center">
                        財務部
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
} 