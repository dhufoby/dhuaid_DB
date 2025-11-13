
import { NavItem, Course, DigitalBadge, NewsArticle, Announcement } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: '홈', id: 'home' },
  {
    name: '사업소개',
    id: 'about',
    subMenus: [
      { name: '인사말', id: 'greeting' },
      { name: '사업소개', id: 'introduction' },
    ],
  },
  {
    name: '교육과정',
    id: 'curriculum',
    subMenus: [
      { name: 'AID 30+ 집중캠프', id: 'intensive' },
      { name: 'AID 묶음강좌', id: 'bundled' },
      { name: '전체보기', id: 'all-courses' },
    ],
  },
  { name: '디지털배지', id: 'badges' },
  {
    name: '커뮤니티',
    id: 'community',
    subMenus: [
      { name: '교육 소식', id: 'news' },
      { name: '공지사항', id: 'announcements' },
    ],
  },
  {
    name: '온라인 문의',
    id: 'inquiry',
    subMenus: [
      { name: 'FAQ', id: 'faq' },
      { name: '1:1 문의', id: 'one-on-one' },
    ],
  },
];

export const COURSES: Course[] = [
    {
        id: 'aid30-camp',
        title: 'AID 30+ 집중캠프',
        description: 'AI 및 디지털 기술에 대한 30시간 이상의 집중 교육을 통해 실무 역량을 강화하는 프로그램입니다.',
        imageUrl: 'https://picsum.photos/seed/course1/600/400',
        type: 'Intensive Camp',
    },
    {
        id: 'aid-bundled',
        title: 'AID 묶음강좌',
        description: '다양한 주제의 AI 및 디지털 강좌를 묶어 제공하여 폭넓은 지식을 습득할 수 있는 과정입니다.',
        imageUrl: 'https://picsum.photos/seed/course2/600/400',
        type: 'Bundled Course',
    },
    {
        id: 'data-science',
        title: '데이터 과학 입문',
        description: '데이터 분석 및 시각화 기술을 배우고, 실제 데이터로 문제를 해결하는 능력을 기릅니다.',
        imageUrl: 'https://picsum.photos/seed/course3/600/400',
        type: 'Bundled Course',
    },
    {
        id: 'machine-learning',
        title: '머신러닝 프로젝트 캠프',
        description: '실전 머신러닝 모델을 개발하고 배포하는 과정을 체험하는 프로젝트 기반 집중 캠프입니다.',
        imageUrl: 'https://picsum.photos/seed/course4/600/400',
        type: 'Intensive Camp',
    },
];

export const BADGES: DigitalBadge[] = [
    { id: 'b1', title: 'AID 30+ 집중캠프 수료', course: 'AID 30+ 집중캠프', imageUrl: 'https://picsum.photos/seed/badge1/300/300' },
    { id: 'b2', title: 'AID 묶음강좌 마스터', course: 'AID 묶음강좌', imageUrl: 'https://picsum.photos/seed/badge2/300/300' },
    { id: 'b3', title: '데이터 분석 전문가', course: '데이터 과학 입문', imageUrl: 'https://picsum.photos/seed/badge3/300/300' },
    { id: 'b4', title: '머신러닝 엔지니어', course: '머신러닝 프로젝트 캠프', imageUrl: 'https://picsum.photos/seed/badge4/300/300' },
    { id: 'b5', title: 'AI 기초 역량 인증', course: 'AID 묶음강좌', imageUrl: 'https://picsum.photos/seed/badge5/300/300' },
    { id: 'b6', title: '디지털 전환 리더십', course: 'AID 30+ 집중캠프', imageUrl: 'https://picsum.photos/seed/badge6/300/300' },
];

export const NEWS: NewsArticle[] = [
    { id: 'n1', title: 'AID 30+ 프로그램, 성공적인 1기 수료생 배출', date: '2023-11-20', excerpt: '대구한의대학교에서 진행된 AID 30+ 1기 프로그램이 높은 만족도 속에 성공적으로 마무리되었습니다.' },
    { id: 'n2', title: '디지털 배지, 새로운 역량 증명의 시대를 열다', date: '2023-11-15', excerpt: '교육계의 새로운 트렌드로 떠오른 디지털 배지의 현황과 미래에 대해 알아봅니다.' },
    { id: 'n3', title: 'K-MOOC 연계 강좌 오픈 안내', date: '2023-11-10', excerpt: '더 많은 학습자에게 기회를 제공하기 위해 K-MOOC 플랫폼에 AID 묶음강좌가 신규 개설되었습니다.' },
];

export const ANNOUNCEMENTS: Announcement[] = [
    { id: 'a1', title: '2024년도 AID 30+ 집중캠프 2기 모집 안내', date: '2023-12-01', content: '2024년도 상반기 AID 30+ 집중캠프 2기 참가자를 모집합니다. 많은 관심과 지원 바랍니다. 접수 기간: 2023.12.10 ~ 2024.01.10' },
    { id: 'a2', title: '플랫폼 시스템 점검 안내 (12/15 02:00-04:00)', date: '2023-11-28', content: '보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 점검을 실시합니다. 점검 시간에는 서비스 이용이 일시적으로 중단될 수 있습니다.' },
    { id: 'a3', title: '1:1 문의 채널 개편 안내', date: '2023-11-25', content: '원활한 소통을 위해 1:1 문의 채널이 개편되었습니다. 이제부터는 대구한의대 AID30+ 공식 문의 링크를 통해 접수해주시기 바랍니다.' },
];
