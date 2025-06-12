import React from 'react';

// 프로필에서 사용 할 데이터
const mapData = {
  map1: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
  },
  map2: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Subs4 = ({ match }) => {
  
  const { username } = match.params;
  const profile = mapData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Subs4;