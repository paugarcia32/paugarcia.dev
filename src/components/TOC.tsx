'use client'
import { useEffect, useState } from 'react';
import { TOCIcon } from './icons';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TOC = () => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');

    const tocItemsData: TOCItem[] = Array.from(headings).map((heading, index) => {
      const headingId = `section-${index}`;
      heading.setAttribute('id', headingId);
      const level = parseInt(heading.tagName.charAt(1));
      return { id: headingId, text: heading.textContent || '', level };
    });

    setTocItems(tocItemsData);
  }, []);

  const handleClick = (id: string) => {
    const heading = document.getElementById(id);
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    const observer = new MutationObserver(() => {
      const tocItemsData: TOCItem[] = Array.from(headings).map((heading, index) => {
        const headingId = `section-${index}`;
        heading.setAttribute('id', headingId);
        const level = parseInt(heading.tagName.charAt(1));
        return { id: headingId, text: heading.textContent || '', level };
      });

      setTocItems(tocItemsData);
    });

    headings.forEach((heading) => {
      observer.observe(heading, { attributes: true });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className='flex items-center'>
        <div className='text-primary'>
          <TOCIcon />
        </div>
        <h1 className='text-xl ml-2 mb-1 font-bold font-title'>Contents</h1>
      </div>
      <div id="toc-container" className='bg-background p-4 font-title'>
        <ul>
          {tocItems.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 10}px` }}>
              <a
                href={`#${item.id}`}
                className={`block py-1 text-sm hover:underline text-accent`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TOC;