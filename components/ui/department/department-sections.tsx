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
              <div className="department-image-left">
                <img
                  src={dept.leftImage}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right Text/Content (2/3 width) */}
              <div className="department-content-right">
                <img
                  src={dept.rightImage}
                  alt={`${dept.name}介紹`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="department-layout">
              {/* Left Text/Content (2/3 width) */}
              <div className="department-content-left">
                <div className="bg-[#21807a] text-white h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                      {dept.name}
                    </h2>
                    <div className="w-16 h-1 bg-[#fe7f4c] mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl leading-relaxed max-w-md">
                      致力於透過專業的事工服務，
                      <br />
                      建立弟兄姊妹的屬靈生命，
                      <br />
                      讓每一個人都能在神的愛中成長。
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Image (1/3 width) */}
              <div className="department-image-right">
                <img
                  src={dept.rightImage}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
} 