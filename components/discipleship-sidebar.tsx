interface DiscipleshipSidebarProps {
  activeLink?: string;
}

export function DiscipleshipSidebar({ activeLink }: DiscipleshipSidebarProps) {
  const getLinkClasses = (linkPath: string) => {
    const baseClasses = "block w-full text-left rounded-lg px-4 py-3 transition-colors duration-200";
    
    if (activeLink === linkPath) {
      return `${baseClasses} text-white bg-white/20`;
    } else {
      return `${baseClasses} text-white hover:bg-white/10`;
    }
  };

  const getSubLinkClasses = (linkPath: string) => {
    const baseClasses = "block w-full text-left rounded-lg px-4 py-2 transition-colors duration-200 ml-4";
    
    if (activeLink === linkPath) {
      return `${baseClasses} text-orange-300 bg-white/20`;
    } else {
      return `${baseClasses} text-white hover:bg-white/10`;
    }
  };

  return (
    <div className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
        | 門訓建造-幸福門訓
      </h2>
      
      {/* Navigation Menu */}
      <nav className="space-y-2">
        {/* 幸福門訓介紹 */}
        <a 
          href="/church-discipleship/happiness-intro" 
          className={getLinkClasses("/church-discipleship/happiness-intro")}
        >
          幸福門訓介紹
        </a>

        {/* 慕道班課程 */}
        <a 
          href="/church-discipleship#lesson1" 
          className={getLinkClasses("/church-discipleship")}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            慕道班第一課「耶穌是誰」
          </div>
        </a>

        <a 
          href="/church-discipleship/lesson2" 
          className={getLinkClasses("/church-discipleship/lesson2")}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            慕道班第二課「新生傳奇-重生」
          </div>
        </a>

        <a 
          href="/church-discipleship/lesson3" 
          className={getLinkClasses("/church-discipleship/lesson3")}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            慕道班第三課「天下第一書-聖經」
          </div>
        </a>

        <a 
          href="/church-discipleship/lesson4" 
          className={getLinkClasses("/church-discipleship/lesson4")}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            慕道班第四課「做個自由人」
          </div>
        </a>

        <a 
          href="/church-discipleship/lesson5" 
          className={getLinkClasses("/church-discipleship/lesson5")}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            慕道班第五課「蒙福的記號」
          </div>
        </a>

        <div className="border-t border-white/20 my-4"></div>

        {/* 牧養裝備-門徒學校 */}
        <div className="border-l-4 border-orange-300 pl-2 mb-2">
          <div className="text-white font-semibold text-sm mb-2">
            牧養裝備-門徒學校
          </div>
        </div>
        
        <a 
          href="/church-discipleship/discipleship-school-upper-register" 
          className={getSubLinkClasses("/church-discipleship/discipleship-school-upper-register")}
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            門徒學校上-線上報名
          </div>
        </a>

        <a 
          href="/church-discipleship/discipleship-school-lower-register" 
          className={getSubLinkClasses("/church-discipleship/discipleship-school-lower-register")}
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            門徒學校下-線上報名
          </div>
        </a>

        <div className="border-t border-white/20 my-4"></div>

        {/* 牧養裝備-幸福大學 */}
        <div className="border-l-4 border-orange-300 pl-2 mb-2">
          <div className="text-white font-semibold text-sm mb-2">
            牧養裝備-幸福大學
          </div>
        </div>
        
        <a 
          href="/church-discipleship/happiness-university-upper-register" 
          className={getSubLinkClasses("/church-discipleship/happiness-university-upper-register")}
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            幸福大學上-線上報名
          </div>
        </a>

        <a 
          href="/church-discipleship/happiness-university-lower-register" 
          className={getSubLinkClasses("/church-discipleship/happiness-university-lower-register")}
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            幸福大學下-線上報名
          </div>
        </a>
      </nav>
    </div>
  );
}
