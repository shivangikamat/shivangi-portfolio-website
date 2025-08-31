import React from 'react';

const SVGPreloader: React.FC = () => {
  const criticalSVGs = [
    '/images/vanity_div.svg',
    '/images/center_mannequin.svg',
    '/images/side_mannequins.svg',
    '/images/cabinet.svg',
    '/images/chair.svg',
    '/images/rug.svg',
    '/images/clock.svg',
    '/images/wardrobe.svg',
    '/images/desktop.svg',
    '/images/shelf.svg',
    '/images/open-book.svg',
    '/images/blog-page.svg',
    'images/blog-hearts.svg',
    'images/blog-icon.svg',
    'images/blog-page.svg',
    'images/bookmark.svg',
    'images/bouquet.svg',
    'images/cabinet.svg',
    'images/center_mannequin.svg',
    'images/chair.svg',
    'images/chandelier_dark.svg',
    'images/chandelier.svg',
    'images/clock.svg',
    'images/coat_hanger.svg',
    'images/desktop.svg',
    'images/mannequin_div.svg',
    'images/open-book.svg',
    'images/room_bg.svg',
    'images/rug.svg',
    'images/shelf.svg',
    'images/side_mannequins.svg',
    'images/sofa.svg',
    'images/sv_bg_dark.svg',
    'images/top_light_dark.svg',
    'images/top_light.svg',
    'images/vanity_div.svg',
    'images/walk-in-closet.svg',
    'images/wardrobe.svg',
    'images/window_dark.svg',
    'images/window.svg',
    'images/wardrobe/coat_blue.svg',
    'images/wardrobe/coat_grey.svg',
    'images/wardrobe/dress_black.svg',
    'images/wardrobe/dress_white.svg',
    'images/projects/jumpingjack/1.png',
    'images/projects/jumpingjack/2.png',
    'images/projects/NewYorkAcademyofSciences/1.png',
    'images/projects/NewYorkAcademyofSciences/2.png',
    'images/projects/spacecompetition/Experiment.png',
    'images/projects/spacecompetition/teamSolaris.png',
    'images/project-icons/chrome.svg',
    'images/project-icons/gmail.svg',
    'images/project-icons/vscode.svg',
    'images/project-icons/youtube.svg',
    'images/extracurriculars/awards/edinburgh award.png',
    'images/extracurriculars/basketball/IMG_0502 (1).jpeg',
    'images/extracurriculars/basketball/IMG_1017.jpeg',
    'images/extracurriculars/basketball/IMG_1402.jpeg',
    'images/extracurriculars/basketball/IMG_20180810_094954.jpg',
    'images/extracurriculars/chess/IMG_9528.jpeg',
    'images/extracurriculars/cooking/1.png',
    'images/extracurriculars/cooking/2.png',
    'images/extracurriculars/cooking/3.png',
    'images/extracurriculars/cooking/4.png',
    'images/extracurriculars/crafts/1.png',
    'images/extracurriculars/crafts/2.png',
    'images/extracurriculars/crafts/3.png',
    'images/extracurriculars/debate/national camp.png',
    'images/extracurriculars/hiking/IMG_8931 (1).jpeg',
    'images/extracurriculars/leadership/1.png',
    'images/extracurriculars/leadership/2.png',
    'images/extracurriculars/leadership/3.png',
    'images/extracurriculars/leadership/4.png',
    'images/extracurriculars/leadership/5.png',
    'images/extracurriculars/travelling/1.png',
    'images/extracurriculars/travelling/2.png',
    'images/extracurriculars/travelling/3.png',
    'images/extracurriculars/travelling/4.png',
    'images/extracurricular_shelf/basketball.svg',
    'images/extracurricular_shelf/chess.svg',
    'images/extracurricular_shelf/company.svg',
    'images/extracurricular_shelf/cooking.svg',
    'images/extracurricular_shelf/crafts.svg',
    'images/extracurricular_shelf/debate.svg',
    'images/extracurricular_shelf/hiking.svg',
    'images/extracurricular_shelf/travel.svg',
    'images/extracurricular_shelf/trophy.svg',
    'images/extracurricular_shelf/writing.svg',
    'images/curtains/left.svg',
    'images/curtains/right.svg',
  ];

  return (
    <div style={{ display: 'none' }}>
      {criticalSVGs.map((svg, index) => (
        <img 
          key={index}
          src={svg}
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      ))}
    </div>
  );
};

export default SVGPreloader;
