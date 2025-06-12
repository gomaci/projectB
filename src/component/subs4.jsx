import React from 'react';

// 프로필에서 사용 할 데이터
const mapData = {
  map1: {
    name: '이순신',
    description:
      '대한민국의 위인'
  },
  map2: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Subs4 = ({ match }) => {
  
  const { mapname } = match.params;
  const map = mapData[mapname];
  if (!map) {
    return <div>존재하지 않는 지도입니다.</div>;
  }
  return (
    <div>
      <h3>
        {mapname}({map.name})
      </h3>
      <p>{map.description}</p>
    </div>
  );
};

export default Subs4;